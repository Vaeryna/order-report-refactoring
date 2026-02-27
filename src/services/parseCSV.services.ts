import * as path from "path";
import * as fs from "fs"


export function parseCSV(file: string): {} {
    const base = process.cwd();
    const filePath = path.join(base, "..", '../', "legacy", 'data', file)
    const data = fs.readFileSync(filePath, 'utf-8').trim()

    const lines = data.split(/\r?\n/).filter(l => l.trim());
    const [headerLine, ...dataLines] = lines;

    const headers = headerLine.split(",")


    const result = dataLines.map(line => {
        const parts = line.split(",");

        return Object.fromEntries(headers.map((header, i) => [header, parts[i]]))
    })

    return result

}
