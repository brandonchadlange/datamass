import { NextResponse } from "next/server";

export async function GET() {
  // This is a sample configuration - in production this would likely come from a database or CMS
  const uiConfig = {
    title: "DataMass - Server Driven UI",
    description: "A modern server-driven UI application",
    routes: [
      {
        path: "/",
        layout: "MainLayout",
        components: [
          {
            type: "Header",
            props: {
              title: "Welcome to DataMass",
              description: "Server-driven UI Example",
            },
          },
          {
            type: "ProductList",
            props: {
              title: "Featured Products",
            },
          },
        ],
      },
      {
        path: "/products",
        layout: "MainLayout",
        components: [
          {
            type: "ProductGrid",
            props: {
              columns: 3,
              showFilters: true,
            },
          },
        ],
      },
      {
        path: "/products/[productId]",
        layout: "MainLayout",
        components: [
          {
            type: "ProductGrid",
            props: {
              columns: 3,
              showFilters: true,
            },
          },
        ],
      },
    ],
    components: {
      Header: {
        version: "1.0.0",
        props: {
          schema: {
            title: "string",
            description: "string",
          },
        },
      },
      ProductList: {
        version: "1.0.0",
        props: {
          schema: {
            title: "string",
          },
        },
      },
      ProductGrid: {
        version: "1.0.0",
        props: {
          schema: {
            columns: "number",
            showFilters: "boolean",
          },
        },
      },
    },
  };

  return NextResponse.json(uiConfig);
}
