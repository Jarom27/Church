const Util = {}

Util.buildAttendanceTable = async function (data) {
    let table = `
        <table>
            <thead>
            <tr>
                <th>Miembros del Barrio</th>
                <th>Miembros Foraneos</th>
                <th>Fecha</th>
                <th>Total</th>
                <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
    `
    console.log(data)
    let odd = false;
    data[0].forEach(row => {

        table += `
        <tr class = ${odd ? 'odd' : ''}>
            <td>${row.attendance_ward}</td>
            <td>${row.attendance_foreign}</td>
            <td>${row.attendance_date.toLocaleDateString()}</td>
            <td>${(row.attendance_ward + row.attendance_foreign)}</td>
            <td><a href = '/attendance/${row.attendance_id}' title = 'Editar Datos'>Editar</a></td>
        </tr>`
        if (odd) {
            odd = false;
        }
        else {
            odd = true;
        }
    })
    table += "</tbody></table>"
    return table
}

module.exports = Util