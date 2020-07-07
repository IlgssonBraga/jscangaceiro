let negociacaocontroller = new NegociacaoController();

document
  .querySelector(".form")
  .addEventListener(
    "submit",
    negociacaocontroller.adiciona.bind(negociacaocontroller)
  );
