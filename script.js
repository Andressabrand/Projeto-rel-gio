
function atualizarRelogio() {
    const agora = new Date();
    const horas = agora.getHours().toString().padStart(2, '0');
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    const segundos = agora.getSeconds().toString().padStart(2, '0');

    const horarioFormatado = `${horas}:${minutos}:${segundos}`;

    document.getElementById('display').textContent = horarioFormatado;
}

// Atualiza o relógio imediatamente e a cada segundo
atualizarRelogio();
setInterval(atualizarRelogio, 1000);