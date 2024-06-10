import { type Page } from '..'

export const extractElementTextOrNull = async (page: Page, selector: string): Promise<string | null> => {
  try {
    return await page.$eval(selector, (el) => el.textContent)
  } catch {
    return null
  }
}
