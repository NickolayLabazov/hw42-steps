export const compare = (a, b) => {
    let yearA = Number(a.date[6] + a.date[7])
    let yearB = Number(b.date[6] + b.date[7])

    let monthA = Number(a.date[3] + a.date[4])
    let monthB = Number(b.date[3] + b.date[4])

    let dayA = Number(a.date[0] + a.date[1])
    let dayB = Number(b.date[0] + b.date[1])

    if (yearA > yearB) {
        return -1;
    } else if (yearA < yearB) {
        return 1;
    } else {
        if (monthA > monthB) {
            return -1;
        } else if (monthA < monthB) {
            return 1;
        } else {
            if (dayA > dayB) {
                return -1;
            } else if (dayA < dayB) {
                return 1;
            }
        }
    }
}