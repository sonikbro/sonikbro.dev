---
title: "My Smart Home on Home Assistant"
description: "How I built a smart home with Home Assistant using Zigbee, BLE, Wi-Fi and a bunch of automations"
date: 2026-04-06
type: post
keywords:
  - Home Assistant
  - smart home
  - Zigbee
  - Zigbee2MQTT
  - automation
  - Raspberry Pi
  - IoT
  - Aqara
  - adaptive lighting
---

Today I want to share my experience building a setup on [Home Assistant](https://www.home-assistant.io/). I'm a developer, so most of the technical stuff clicked for me right away. But I clearly remember the moment I first figured out why some integration had been breaking my entire "smart" home for three days.

My home server slash smart home isn't something I planned out from day one — it just evolved naturally over time. Wi-Fi, Zigbee, and Bluetooth all live under the same roof, alongside a colorful mix of brands: [Aqara](https://www.aqara.com/), [Xiaomi](https://home.mi.com/), [Tuya](https://www.tuya.com/), and more. The real power of Home Assistant is that it brings this whole zoo of gadgets together into one system. On top of that, it's dead simple to share access with family — everyone gets their own account with their own dashboard, notifications, and permissions. No need to explain YAML to anyone — just hand them access through the companion app.

![HA](/content/ha/base.jpg)

---

## 🧰 My Tech Stack: Why One Protocol Is Boring

I never tried (and frankly didn't know how) to build everything on a single protocol — I just liked experimenting. Home Assistant became the perfect "translator" for this zoo.

- 📡 **[Zigbee2MQTT](https://www.zigbee2mqtt.io/) + [Mosquitto](https://github.com/home-assistant/addons/tree/master/mosquitto)** — dozens of sensors, buttons, and bulbs through one coordinator, no proprietary hubs from each vendor
- 📶 **BLE / [BTHome](https://bthome.io/)** — thermometers, soil sensors. No cloud, no lag — data straight into HA
- 📻 **Wi-Fi** — bulbs, smart plugs with energy monitoring, robot vacuum. Local control, minimal cloud dependency
- 🎵 **Media** — TV, console, soundbar, media players — all in one interface with automation triggers

---

## ⚙️ System Flows: How My Smart Home Actually Works

Instead of just tapping buttons on my phone, I focused on automations that understand context and work for me, not through me.

### 1. Energy Safety

In the current reality, this is priority number one. I have two portable power stations from different brands integrated into the system.

📡 **Remote monitoring.** A lot of people don't know that some power stations only work over Bluetooth — no Wi-Fi at all. Checking the charge remotely? Impossible. I got around this with a custom [HACS](https://hacs.xyz/) integration that pulls all the metrics via BLE from the Raspberry Pi and feeds them into HA. The second station connects through the manufacturer's official integration.

⚡ **Power outage alerts.** An automation watches the AC input on the power station. When nobody's home (presence toggle is off), the system instantly notifies me when power comes or goes. So I always know what's happening with electricity, even when I'm away.

🪫 **Critical charge.** If any station drops below 25% — instant push notification. The automation runs in parallel mode, handling multiple triggers at once.

🚨 **Air raid alert aggregator.** Home Assistant monitors several air raid alert sources through a specialized integration. The automation fires when any source picks up a threat for my specific district (in Kyiv right now, this is very much a real need), sending a notification about a nearby threat. The push breaks through iOS silent mode (`critical: 1`, `interruption_level: critical`) and includes the latest message about the threat type. Three sources instead of one — redundancy that's absolutely worth it here. There's also the official [Ukraine Alarm](https://www.home-assistant.io/integrations/ukraine_alarm/) integration.


### 2. Physical Buttons: Tactile Control

One thing I totally underestimated at first — wireless Zigbee buttons. Cheap, no wires, and via Zigbee2MQTT each one supports multiple actions: single press, double press, and long press.

Every room has its own button with its own logic:

- **Single press** → toggle main light
- **Double press** → all lights in the room (ceiling, desk lamp, LED strip)
- **Long press** → kill everything in the apartment

The "kill everything" action lives on every remote — it's my "leaving home" shortcut. One long press, and the apartment goes to sleep.


### 3. Lighting That Respects You

This is the trickiest automation layer. At its core is the [Adaptive Lighting](https://github.com/basnijholt/adaptive-lighting) component, which gradually shifts brightness and color temperature throughout the day to mimic natural sunlight.

☀️ During the day — a cool, alert spectrum; 🌙 at night — warm, dim light to wind down for sleep.

🚶 **Auto-on by motion.** Rooms have motion sensors with lux measurement. Lights only kick in when it's dark (`illuminance < 50 lux`) and there's motion. No motion for 5 minutes — lights off. Super handy in the kitchen: walk in — lights on, walk out — lights off.

✋ **Manual Override.** The biggest headache with any automation: it turns the lights on when you want darkness. I solved this by checking the event context. When I manually switch off a lamp, the system detects it through the missing `parent_id` in `trigger.to_state.context` — meaning the action came from a human, not an automation. The adaptive mode flag for that zone gets disabled, and the automation backs off. Turn the light back on manually — the flag resets, automation kicks back in. This pattern is used in every room. It's elegant because it doesn't need extra buttons or modes — the system just "gets" whether the action was mine.

🔄 **Fallback logic.** If the main light goes unavailable for whatever reason (say, the bulb got unplugged), the automation switches on a backup USB desk lamp instead of leaving the room in the dark.

🎬 **Media mode.** TV turns on — adaptive lighting turns off. Console or media player starts playback — all lights in the room go dark. Turn off the TV — adaptive mode comes back. Zero manual effort.

![HA](/content/ha/light.jpg)

### 4. Household Helpers

👕 **Laundry tracking.** Through a smart plug with power monitoring, the system tracks the washing machine's cycle. Consumption goes above 2W for over a minute — laundry started. Power drops below 1W for a minute — it's done, push notification: *"Don't forget to grab the clothes!"* A simple flow that saves a lot of forgotten laundry sitting in the drum.

💨 **Smart humidifier.** My humidifier has no water level sensor — a classic budget device problem. The automation kicks in 2 hours after sunset (when the air is driest), but only if humidity from the BLE thermometer reads below 40%. Then:

1. 💾 Current humidity is saved
2. ▶️ Humidifier turns on at medium
3. 🔍 After 5 minutes — check: if humidity hasn't gone up, the water tank is empty. Device shuts off, notification sent
4. ✅ If humidity is climbing — the system waits for 50%, then turns off the humidifier and reports the result

All the logic lives in one automation, no extra scripts.

🤖 **Robot vacuum.** Integrated via [HACS](https://hacs.xyz/) with full room map support. The dashboard shows the vacuum's position, lets you start cleaning specific rooms, and track consumable wear.

🌱 **Plants under control.** BLE soil moisture sensors hooked up for houseplants. When moisture drops below the threshold — my wife gets a notification. No plant goes forgotten, and I don't hear *"you could've reminded me."*

### 5. Presence System

The core piece — a boolean presence toggle. It's a manual switch (not automatic GPS tracking), because the neighboring shithole country regularly launches ballistic missiles and GPS in the city drifts you kilometers off.

When I flip the state:
- 🏡 **"Home"** — a script runs: the right lights come on, adaptive modes are restored
- 🚪 **"Away"** — another script: all lights off, unnecessary devices shut down, music or TV stops

### 6. Safety: Sensors

💧 **Water leak sensors** — placed in risky spots. When triggered — critical alert. Plus devices in the affected rooms get shut off. I dream of owning a house where I could fully control the water supply — automations would go way further in that case.


### 7. System Monitoring

🔄 **Restart notifications.** When Home Assistant boots up, a push arrives: *"The house is smart again!"* A useful signal: if I get this unexpectedly — either there was a power outage, or the server rebooted on its own. Worth investigating.

🔋 **Batteries.** All battery-powered Zigbee devices are monitored automatically. When the charge drops below threshold — a notification comes in with the exact device name. No need to manually check dozens of sensors and buttons — the system tells you which one needs a fresh battery.

### 8. AI Automations

🚗 **"Should I wash the car?"** Using an AI agent plus the local weather forecast, I get an answer on demand: is it worth washing the car today. The agent checks the forecast for the next few days — if rain's coming, it says wait. If it's sunny ahead — green light. Simple integration, but saves time and money.

🎙️ **Voice deep research.** I set up a pipeline where I dictate a research topic or random thoughts by voice. The system transcribes the audio via [Whisper](https://github.com/home-assistant/addons/tree/master/whisper), processes the text, fires off a deep research through an AI agent, and once it's done — sends a structured result to Telegram based on my prompt. Basically a voice-to-research pipeline running entirely on the local server. Dictate a thought on the go — get a full breakdown in the messenger.

---

##  What Else Is Under the Hood

Running on a **Raspberry Pi 5** (8 GB RAM).

### 🔌 Add-ons:
- **[Zigbee2MQTT](https://www.zigbee2mqtt.io/) + [Mosquitto broker](https://github.com/home-assistant/addons/tree/master/mosquitto)** — the backbone of the Zigbee network
- **[Cloudflared](https://github.com/brenner-tobias/addon-cloudflared)** — secure tunnel for remote access, no open ports needed
- **MQTT integration for gaming console** — control via MQTT
- **[Whisper](https://github.com/home-assistant/addons/tree/master/whisper) + [Piper](https://github.com/home-assistant/addons/tree/master/piper)** — local speech recognition and synthesis ([Wyoming Protocol](https://github.com/rhasspy/wyoming)), works offline. The local LLM is used purely for text transcription — 8 GB of RAM on the Raspberry Pi 5 is barely enough for that alone
- **[Node-RED](https://github.com/hassio-addons/addon-node-red)** — for complex flows that are painful to write in YAML
- **Terminal & SSH** — remote server access
- **File editor** — editing configs from the browser
- **[Google Drive Backup](https://github.com/sabeechen/hassio-google-drive-backup)** — automatic cloud backups

### 🌡️ Climate & Environment:
- AC control via IR integration
- Scheduled power outage charts
- Local air quality monitoring
- Weather forecast
- Sun state (sunrise, sunset) for automation triggers

### 🧠 AI & Communication:
- **Google Gemini + OpenAI** — for event analysis and experiments
- **Telegram bot** — alternative notification channel
- **Google Translate TTS** — speech synthesis for voice alerts
- **Google Calendar** — schedule integration into automations

### 🔧 Helpers:
15 helpers in total — the "glue" between automations:
- **Sensor groups** — aggregated light, humidity, and temperature readings across the apartment
- **Mode flags** — manual override control for each zone
- **Device states** — tracking work cycles and power
- **Text input** for AI experiments

### 🎨 Visualization:
- **[Mushroom](https://github.com/piitaya/lovelace-mushroom)** — the dashboard foundation
- **[mini-graph-card](https://github.com/kalkih/mini-graph-card)** — temperature, humidity, and energy consumption graphs
- **[auto-entities](https://github.com/thomasloven/lovelace-auto-entities)** — auto-display of low-battery devices

---

## 🏁 Wrapping Up

A smart home isn’t a finished product — it’s a living system that grows with you. I started with a single smart bulb, and now I have dozens of devices, automations that think for themselves, and an AI agent I can talk to by voice. Some of it took an evening to set up, some of it took weeks of debugging YAML at 2 AM.

**The main takeaway:** you don’t need to plan everything upfront. Start small, automate what actually annoys you, and the system will evolve on its own. Home Assistant gives you the freedom to build exactly the setup you need — not the one some vendor decided to sell you.

Still have questions? Then feel free to leave a comment — I’ve finally gotten around to enabling them. 💬
