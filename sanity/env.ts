export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-14'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)
export const token = assertValue(
 "skpgoCuuvDHKI6ksarizs8TasaZIw86pBFdMr81CrkBJuL9omyENQfWEf2ZKA7cIcAbQGc5IM5h9g9LiWVVMWtiwibB8r3C3UbjhHn3rcUm5V8C9PDuDT6iRBhUnuQUZUXtGuq0eR3mNgvyoumGxceofhzaP6F7XXQ2BF89Tzp1WMxBpcCMk",
 'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
