# Poketo (Educacional) 🎴🎮✨

Una recreación educativa del juego Pokémon TCG Pocket, desarrollada en TypeScript para ejecutarse en terminales. 🚀 Este proyecto busca explorar conceptos básicos del juego. 🃏🎯

---

## **Características de los Pokémon** 🐾✨

### Comunes 🟢
- **⚙️ Coste de Retiro**: Energías necesarias para retirar un Pokémon.
- **🔄 Número de Evolución**: Etapa de evolución del Pokémon.
- **⚔️ Ataques**: Pueden tener uno o más ataques.
- **❤️ Vida**: Puntos de vida del Pokémon.
- **💥 Daño de Ataque**: El daño base infligido por los ataques.

### No Comunes 🟡
- **🧬 Pokémon Básico**: Indicador de si el Pokémon es básico o no.
- **⭐ Habilidades**: Algunos Pokémon tienen habilidades especiales.

---

## **Ataques** ⚔️🔥

### Comunes 🟢
- **💥 Daño Base**: Puede ser 0 o más.
- **⚡ Energías Necesarias**: Número de energías requeridas para usar el ataque (puede ser 0).
- **🌟 Tipo**: Tipo elemental del ataque (e.g., Fuego, Agua, Planta).

### No Comunes 🟡
Algunas cartas tienen efectos adicionales:
- **🔄 Efectos sobre sí mismo**: Ejemplo: no pueden hacer daño al rival con cartas de aumento.
- **🚫 Restricciones**: Ejemplo: algunas no aplican daño con cartas como Giovanni (+10 daño).
- **🎲 Daño Variable**: Depende de factores como lanzar monedas.
- **⚡ Efectos Especiales**:
  - ☠️ **Envenenar**.
  - 😴 **Dormir**.
  - ⚡ **Paralizar**.
  - 💨 **Retirar energías al rival**.
  - 🔋 **Retirar energías al propio Pokémon**.
  - ❤️ **Curar** al Pokémon activo.
  - 🌌 **Teletransportarse**.
  - 🔄 **Cambiar al Pokémon activo** (e.g., efecto Sabrina).
  - 📤 **Enviar Pokémon a la baraja**.
  - ⚡ **Generar energías adicionales**.

---

## **Cartas Entrenador** 🧙‍♂️🎩
- **📝 TODO**: Descripción y mecánicas por implementar.

---

## **Cartas de Apoyo** ✊✨
- **📝 TODO**: Descripción y mecánicas por implementar.

---

## **Tablero** 🎲🃏
- **🌟 Zona Activa**: 1 espacio para el Pokémon activo.
- **🏞️ Banca**: 3 espacios para Pokémon en la banca.

---

## **Energías** ⚡💧🔥
Las cartas de energía son esenciales para activar ataques y otras habilidades. Más detalles en desarrollo. 🛠️

---

## **Mecánicas de Partida** 🎮📜

### Reglas Básicas 📋
1. **⏳ Duración Máxima**: La partida tiene un límite de 30 turnos. Si se alcanzan, el resultado será un empate. 🤝
2. **🎲 Inicio de Partida**:
   - Cada jugador comienza con 5 cartas. 🃏
   - Debes tener al menos un Pokémon básico en la mano inicial (sin mulligans). 🐾
   - El primer turno es decidido por sorteo. 🎰
   - El jugador que empieza no genera energía en el primer turno, pero puede atacar si obtiene energías de otras maneras. ⚡
3. **🤲 Condiciones de Mano**:
   - Máximo 10 cartas en la mano. ✋
4. **⚡ Energías**:
   - Cada turno genera 1 energía automáticamente (si no se asigna, se pierde). 🔋
5. **🔄 Evoluciones**:
   - No puedes evolucionar un Pokémon en el turno en el que fue jugado o evolucionado. 🧬
   - Puedes evolucionar múltiples Pokémon en el mismo turno. 🌟
6. **⏩ Turnos**:
   - El turno termina al atacar o al usar la opción de "acabar turno". ✅
7. **🚫 Condiciones Especiales**:
   - Algunas condiciones pueden impedir atacar o retirar un Pokémon. 🛡️

---

### **Sujeto a Cambios** 🔄
Este proyecto está en desarrollo, por lo que las reglas y mecánicas pueden ajustarse o ampliarse. 🛠️✨

---

## **Contribuciones** 🤝💻
¡Este es un proyecto educativo! Si deseas contribuir con mejoras, optimizaciones o nuevas funcionalidades, no dudes en hacer un pull request. 🚀✨

---

## **Licencia** 📝⚖️
Este proyecto es de uso educativo y no oficial. No está afiliado a Nintendo, Creatures Inc., ni Game Freak. ❌🎮

🙏 Nintendo, no me demandes. 🙏

---

**¡Que comiencen los duelos!** 🎴⚡🔥
