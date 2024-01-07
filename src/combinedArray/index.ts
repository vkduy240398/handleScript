export default function combinedArray(arrays: any[], key: any) {
    const results = arrays.reduce((acc, curr) => {
        const founds = acc.find((v: any) => v[key] === curr[key]);
        if (!founds) {
            acc.push({
                ...curr,
                children: [curr]
            })
        }
        else {
            founds.children.push(curr)
        }

        return acc;
    }, [])

    return results;
}