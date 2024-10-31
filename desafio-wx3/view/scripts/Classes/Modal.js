export default class Modal {
  constructor(btnId, modalId, display) {
    this.btn = document.getElementById(btnId);
    this.modal = document.getElementById(modalId);

    this.iniciarModal(display);
  }

  iniciarModal(display) {
    this.btn.addEventListener("click", () => this.abrirModal(display));
    window.addEventListener("click", (event) => {
      if (event.target === this.modal) {
        this.fecharModal();
      }
    });
  }

  abrirModal(display) {
    this.modal.style.display = display;
  }

  fecharModal() {
    this.modal.style.display = "none";
  }
}
