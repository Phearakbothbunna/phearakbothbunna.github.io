
const animations = {
    fadeIn: {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1,
            },
        },
    },

    staggeredSlideIn: {
        hidden: { opacity: 0, x: -50 },
        visible: (index) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: index * 0.3,
                duration: 0.6,
                ease: "easeOut"
            }
        })
    }
};

export default animations;

