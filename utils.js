export const getYears = () => {
    const minYear = 2006;
    const currentYear = new Date().getFullYear();
    let list = [];
    for (let i = minYear; i <= currentYear; i++) {
        list.push(i.toString());
    }
    return list;
}

