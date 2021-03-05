const diagnosis = (answers) => {
  const [
    character,
    duration,
    regularity,
    intensity,
    localisation,
    color,
    plaque,
    bleeding,
    condition,
    length,
  ] = answers;

  if (
    (character.num === "1" || character.num === "2" || character.num === "3") &&
    (duration.num === "1" || duration.num === "2") &&
    (regularity.num === "1" || regularity.num === "2") &&
    (intensity.num === "1" || intensity.num === "3") &&
    (localisation.num === "1" || localisation.num === "2") &&
    color.num === "4" &&
    (condition.num === "1" || condition.num === "2")
  ) {
    return "Кариес";
  } else if (
    (character.num === "2" || character.num === "3" || character.num === "4") &&
    duration.num === "4" &&
    regularity.num === "3" &&
    intensity.num === "4" &&
    (localisation.num === "2" || localisation.num === "3") &&
    color.num === "4" &&
    (condition.num === "1" || condition.num === "2") &&
    (length.num === "1" || length.num === "2")
  ) {
    return "Пульпит Острый";
  } else if (
    (character.num === "2" || character.num === "3" || character.num === "4") &&
    duration.num === "3" &&
    (regularity.num === "2" || regularity.num === "3") &&
    (intensity.num === "2" || intensity.num === "3") &&
    (localisation.num === "2" || localisation.num === "3") &&
    (color.num === "2" || color.num === "3" || color.num === "4") &&
    (condition.num === "2" || condition.num === "3") &&
    (length.num === "3" || length.num === "4")
  ) {
    return "Пульпит Хронический";
  } else if (
    character.num === "1" &&
    (duration.num === "2" || duration.num === "3") &&
    regularity.num === "4" &&
    (intensity.num === "1" || intensity.num === "3") &&
    (localisation.num === "3" || localisation.num === "4") &&
    (color.num === "1" || color.num === "2" || color.num === "3") &&
    (condition.num === "3" || condition.num === "4") &&
    (length.num === "2" || length.num === "3" || length.num === "4")
  ) {
    return "Периодонтит";
  } else if (
    (character.num === "3" || character.num === "4") &&
    duration.num === "4" &&
    (regularity.num === "2" || regularity.num === "3") &&
    intensity.num === "3" &&
    localisation.num === "4" &&
    color.num === "1" &&
    condition.num === "4" &&
    (length.num === "1" || length.num === "2")
  ) {
    return "Альвеолит";
  } else if (
    (character.num === "1" || character.num === "2") &&
    duration.num === "2" &&
    regularity.num === "2" &&
    intensity.num === "2" &&
    localisation.num === "4" &&
    color.num === "4" &&
    (plaque.num === "2" || plaque.num === "3" || plaque.num === "4") &&
    (bleeding.num === "2" || bleeding.num === "3" || bleeding.num === "4")
  ) {
    return "Гингивит";
  } else {
    return "Кариозное или некариозное заболевание челюстного аппарата, нужна детальная консультация врача";
  }
};

module.exports = diagnosis;
