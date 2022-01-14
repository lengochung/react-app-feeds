import { config } from "./config"

// XmlHttpRequest
class Database {

    fetchAll (sql) {
        const target = "fetchAll.php?sql=" + sql
        return this.XmlHResquest(target)
    }
    fetch (sql) {
        const target = "fetch.php?sql=" + sql
        return this.XmlHResquest(target)
    }
    fetchColumn (sql) {
        const target = "fetchColumn.php?sql=" + sql
        return this.XmlHResquest(target)
    }
    none (sql) {
        const target = "none.php?sql=" + sql
        return this.XmlHResquest(target)
    }

    ast_post () {
        const target = "ast.php"
        return this.XmlHResquest(target)
    }
    // 
    XmlHResquest (target) {
        try {
            let http = new XMLHttpRequest() //fetch, axios
                http.open("GET", config.PATH_API + target, false)
                http.send(null)

            let reponse = JSON.parse(http.responseText)

            if(reponse.status)
                return reponse.result
            else {
                alert(reponse.error)
                return []
            }
        } catch (error) {
            alert("Server MySql không phản hồi \n " + error)
            window.location.reload()
            return []
        }
    }
}

export default Database