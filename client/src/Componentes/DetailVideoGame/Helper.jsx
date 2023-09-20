export function stripHtmlTags(html) {
    const tmp = document.createElement("div")
    tmp.innerHTML = html
    return tmp.textContent || tmp.innerText || ""
}
