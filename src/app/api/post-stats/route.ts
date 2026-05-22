import { NextResponse } from 'next/server';

const GISCUS_REPO_OWNER = 'sonikbro';
const GISCUS_REPO_NAME = 'sonikbro.dev';
const GISCUS_CATEGORY_ID = 'DIC_kwDOHedqfc4C6Kkg';

export type PostStatsMap = Record<string, { comments: number; reactions: number }>;

interface DiscussionNode {
  title: string;
  comments: { totalCount: number };
  reactions: { totalCount: number };
}

interface GraphQLResponse {
  data?: { repository: { discussions: { nodes: DiscussionNode[] } } };
  errors?: Array<{ message: string }>;
}

const QUERY = `
  query($owner: String!, $name: String!, $categoryId: ID!) {
    repository(owner: $owner, name: $name) {
      discussions(first: 100, categoryId: $categoryId) {
        nodes {
          title
          comments { totalCount }
          reactions { totalCount }
        }
      }
    }
  }
`;

export const revalidate = 300;

export async function GET() {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return NextResponse.json({} satisfies PostStatsMap);
  }

  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: QUERY,
      variables: {
        owner: GISCUS_REPO_OWNER,
        name: GISCUS_REPO_NAME,
        categoryId: GISCUS_CATEGORY_ID,
      },
    }),
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    return NextResponse.json({} satisfies PostStatsMap, { status: 502 });
  }

  const json = (await res.json()) as GraphQLResponse;
  if (json.errors || !json.data) {
    return NextResponse.json({} satisfies PostStatsMap, { status: 502 });
  }

  const map: PostStatsMap = {};
  for (const node of json.data.repository.discussions.nodes) {
    map[node.title] = {
      comments: node.comments.totalCount,
      reactions: node.reactions.totalCount,
    };
  }

  return NextResponse.json(map);
}
