(() => {
  // Funcion no debe terminar exitosamente
  const abc = (message: string): never => {
    // Error a function returning 'never' cannot have a reachable end point(no entra y la funcion regresa void)
    // if (false) {
    //   throw new Error(message);
    // }

    throw new Error(message);
  };

  abc("Nemesis");
})();
