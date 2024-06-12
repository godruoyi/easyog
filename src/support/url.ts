export function formatDomain(url: string): string {
    try {
        const urlString = new URL(url)
        return urlString.hostname
    }
    catch (error) {
        throw new Error('invalid url')
    }
}
