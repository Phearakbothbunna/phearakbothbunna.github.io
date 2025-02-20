export const fadeIn =  {
    hidden: {opacity: 0, y:10},
    visible: {
        opacity: 1,
        // return to original position
        y: 0,
        transition: {
            duration: 0.5,
        }
    }
};

