/**
 * Helper for calling Firebase Cloud Functions from the Next.js frontend.
 *
 * Usage (public endpoint):
 *   const res = await functionsApi("ping");
 *
 * Usage (auth-protected endpoint):
 *   import { auth } from "@/lib/firebase";
 *   const token = await auth.currentUser?.getIdToken();
 *   const res = await functionsApi("securePing", { headers: { Authorization: `Bearer ${token}` } });
 */

const FUNCTIONS_BASE_URL =
  process.env.NEXT_PUBLIC_FIREBASE_FUNCTIONS_URL ??
  "https://southamerica-east1-authkit-y9vjx.cloudfunctions.net";

/**
 * Sends a fetch request to a Firebase Cloud Function.
 *
 * @param path - Function name / path (e.g. "ping" or "securePing")
 * @param options - Optional RequestInit (method, headers, body, …)
 */
export function functionsApi(
  path: string,
  options?: RequestInit
): Promise<Response> {
  return fetch(`${FUNCTIONS_BASE_URL}/${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers ?? {}),
    },
  });
}
