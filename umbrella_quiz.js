var umbrella = {
    color: "pink",
    isOpen: false,
    open: function() {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    isClose: true,
    close: function () {
      if (umbrella.isClosed === true) {
        return "The umbrella is already closed!"; 
      }else {
        umbrella.isClosed = true; 
        umbrella.isOpen = false; 
        return "Julia closes the umbrella"; 
      }
    },
};

