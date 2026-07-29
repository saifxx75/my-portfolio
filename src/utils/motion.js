export const calmEase = [0.22, 1, 0.36, 1];

export const revealViewport = {
  once: true,
  amount: 0.18
};

export const pageHeaderVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.08
    }
  }
};

export const sectionVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.075
    }
  }
};

export const listVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.055
    }
  }
};

export const revealItemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.52,
      ease: calmEase
    }
  }
};

export const subtleRevealVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.46,
      ease: calmEase
    }
  }
};

export const cardTransition = {
  duration: 0.28,
  ease: calmEase
};

export const professionalCardHover = {
  y: -4,
  transition: cardTransition
};
