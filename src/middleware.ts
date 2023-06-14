import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = new URL(request.url);

  if (url.pathname.match(/^(\/posts|\/posts\/page\/[0-9]{1,})$/)) {
    const page = url.pathname.split("/")[3];
    const rewriteUrl = new URL("/posts", url);

    if (page) {
      rewriteUrl.searchParams.set("page", page);
    } else {
      rewriteUrl.searchParams.delete("page");
    }
    return NextResponse.rewrite(rewriteUrl);
  }
}
