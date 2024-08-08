document.addEventListener('DOMContentLoaded', function() {
    cargarSolicitudes();
});

function cargarSolicitudes() {
    const tbody = document.getElementById('solicitudesTable').getElementsByTagName('tbody')[0];
    tbody.innerHTML = ''; // Limpiar la tabla antes de agregar nuevas filas

    // Simulación de datos cargados, en una aplicación real, estos datos podrían venir de una base de datos
    const solicitudes = [
        { nro: 1, fecha: '2024-08-08', asunto: 'Compra de equipos', categoria: 'Equipos', prioridad: 'Alta', pago: 'Pendiente', importe: '1200', estado: 'Pendiente', detalle: 'Ver más' },
        { nro: 2, fecha: '2024-08-07', asunto: 'Renovación de licencia', categoria: 'Software', prioridad: 'Media', pago: 'Completado', importe: '300', estado: 'Aprobado', detalle: 'Ver más' }
    ];

    solicitudes.forEach(solicitud => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${solicitud.nro}</td>
                        <td>${solicitud.fecha}</td>
                        <td>${solicitud.asunto}</td>
                        <td>${solicitud.categoria}</td>
                        <td>${solicitud.prioridad}</td>
                        <td>${solicitud.pago}</td>
                        <td>${solicitud.importe}</td>
                        <td>${solicitud.estado}</td>
                        <td><button onclick="verDetalle(${solicitud.nro})">${solicitud.detalle}</button></td>`;
        tbody.appendChild(tr);
    });
}

function generarNuevaSolicitud() {
    // Código para generar nueva solicitud
    alert('Generar nueva solicitud');
}

function mostrarPendientes() {
    // Filtrar y mostrar solo las solicitudes pendientes
    alert('Mostrar solicitudes pendientes');
}

function limpiarFiltros() {
    // Código para limpiar filtros y mostrar todas las solicitudes
    alert('Filtros limpiados');
}

function verDetalle(nro) {
    // Código para ver detalles de una solicitud específica
    alert(`Detalles de la solicitud número ${nro}`);
}
