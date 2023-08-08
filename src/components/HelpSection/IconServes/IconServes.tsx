import { ReactComponent as IconFood } from "../../../assets/help/icon-food.svg";
import { ReactComponent as IconTransportation } from "../../../assets/help/icon-transportation.svg";
import { ReactComponent as IconToys } from "../../../assets/help/icon-toys.svg";
import { ReactComponent as IconBlows } from "../../../assets/help/icon-cups.svg";
import { ReactComponent as IconVitamins } from "../../../assets/help/icon-vitamins.svg";
import { ReactComponent as IconShampoos } from "../../../assets/help/icon-shampoos.svg";
import { ReactComponent as IconMedicines } from "../../../assets/help/icon-medicines.svg";
import { ReactComponent as IconCollar } from "../../../assets/help/icon-leashes.svg";
import { ReactComponent as IconAreas } from "../../../assets/help/icon-sleeping-area.svg";
import styles from "./IconServes.module.scss";

// interface IconServesProps extends icon {}

export const IconServes = () => {
  const icon = [
    {
      name: "Pet food",
      icon: <IconFood />,
    },
    {
      name: "Transportation",
      icon: <IconTransportation />,
    },
    {
      name: "Toys",
      icon: <IconToys />,
    },
    {
      name: "Bowls and Cups",
      icon: <IconBlows />,
    },
    {
      name: "Shampoos",
      icon: <IconShampoos />,
    },
    {
      name: "Vitamins",
      icon: <IconVitamins />,
    },
    {
      name: "Medicines",
      icon: <IconMedicines />,
    },
    {
      name: "Collar/leashes",
      icon: <IconCollar />,
    },
    {
      name: "Sleeping areas",
      icon: <IconAreas />,
    },
  ];

  return (
    <div className={styles.container}>
      {icon.map((item, index) => (
        <div key={index} className={styles.icon}>
          {item.icon}
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};
