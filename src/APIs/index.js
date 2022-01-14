import tables from "./tables"

// Load table connect APIs
const load = (table) => {
    return new tables[table]()
}

export default load