/** @format */

const { NextRequest, NextResponse } = require("next/server");

function middleware(request) {
  const headers = new Headers(request.headers);

  const currentEnv = process.env.NODE_ENV || "other";
  const isHttps = headers.get("x-forwarded-proto")?.split(",")[0] === "https";
  const isLocalhost = request.headers.get("host")?.includes("localhost");

  if (currentEnv === "production" && !isHttps && !isLocalhost) {
    const newUrl = new URL(`http://${headers.get("host")}` || "");
    newUrl.protocol = "https:";
    return NextResponse.redirect(newUrl.href, 301);
  }
}

module.exports = { middleware };
