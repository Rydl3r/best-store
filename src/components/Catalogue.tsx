import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Alert,
} from "reactstrap";
import { store, added, deleted } from "../store";
import { useHistory } from "react-router";
import { useState } from "react";

const Catalogue = (): JSX.Element => {
  const [visible, setVisible] = useState(false);

  const history = useHistory();

  interface IData {
    [index: number]: {
      image: string;
      name: string;
      price: number;
    };
  }

  interface IItem {
    image: string;
    name: string;
    price: number;
  }

  const defaultItems = [
    {
      image:
        "https://w7.pngwing.com/pngs/448/578/png-transparent-pizza-margherita-italian-cuisine-chicago-style-pizza-pepperoni-pizza.png",
      name: "Pepperoni",
      price: 300,
    },
    {
      image: "http://pngimg.com/uploads/pizza/pizza_PNG7149.png",
      name: "Friday",
      price: 280,
    },
    {
      image:
        "https://w7.pngwing.com/pngs/756/160/png-transparent-new-york-style-pizza-italian-cuisine-take-out-pasta-pizza.png",
      name: "Emilia",
      price: 400,
    },
    {
      image:
        "https://img2.freepng.ru/20180528/rcf/kisspng-pizza-hut-street-food-take-out-fast-food-delivery-pizza-5b0c43e365fb87.7995701115275304674177.jpg",
      name: "Cheese",
      price: 250,
    },
    {
      image:
        "https://3-chetverti.ru/image/cache/data/dlya_nego_998x954px-340x230.jpg",
      name: "Hot",
      price: 333,
    },
    {
      image:
        "https://thumb.tildacdn.com/tild3637-6536-4166-b665-353064636136/-/resize/796x/-/format/webp/_.png",
      name: "Zhu Zhu",
      price: 260,
    },
    {
      image:
        "https://pizza.od.ua/upload/iblock/043/043ff81c20912fff40b0eb62d575df31.jpg",
      name: "4 meats",
      price: 235,
    },
  ];

  const items = store.getState();

  let total = items.items.reduce(function (prev, cur: IItem) {
    return prev + cur.price;
  }, 0);

  const addItem = (image: string, name: string, price: number): void => {
    if (
      items.items
        .map((item: IItem) => {
          return item.name;
        })
        .indexOf(name) !== -1
    ) {
      alert("Already added!");
    } else {
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
      }, 1000);
      store.dispatch(
        added({
          image: image,
          name: name,
          price: price,
        })
      );
    }
  };

  const deleteItem = (image: string, name: string, price: number): void => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 1000);
    store.dispatch(
      deleted({
        image: image,
        name: name,
        price: price,
      })
    );
  };

  return (
    <div>
      {history.location.pathname === "/" ? (
        <div>
          <div className="d-flex justify-content-center flex-wrap">
            {defaultItems.map((item: IItem) => {
              return (
                <Card className="card mx-3 mt-3">
                  <CardImg
                    top
                    width="100%"
                    src={item.image}
                    alt="Card image cap"
                    className="card_image"
                  />
                  <CardBody>
                    <CardTitle tag="h5">{item.name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                      {item.price}$
                    </CardSubtitle>
                    <Button
                      onClick={() => {
                        addItem(item.image, item.name, item.price);
                      }}
                    >
                      Add to cart
                    </Button>
                  </CardBody>
                </Card>
              );
            })}
          </div>

          <Alert
            color="info"
            isOpen={visible}
            className="d-flex justify-content-center mt-3 alert"
          >
            Added item to cart!
          </Alert>
        </div>
      ) : (
        <div>
          <div>
            <div className="d-flex justify-content-center flex-wrap">
              {items.items.map((item: IItem) => {
                return (
                  <Card className="card mx-3 mt-3">
                    <CardImg
                      top
                      width="100%"
                      src={item.image}
                      alt="Card image cap"
                      className="card_image"
                    />
                    <CardBody>
                      <CardTitle tag="h5">{item.name}</CardTitle>
                      <CardSubtitle tag="h6" className="mb-2 text-muted">
                        {item.price}$
                      </CardSubtitle>
                      <Button
                        onClick={() => {
                          deleteItem(item.image, item.name, item.price);
                        }}
                      >
                        Delete from cart
                      </Button>
                    </CardBody>
                  </Card>
                );
              })}
            </div>
            <div>
              {total === 0 ? (
                ""
              ) : (
                <h2 className="total d-flex justify-content-center pt-3">
                  Total: {total}$
                </h2>
              )}
            </div>
          </div>

          <Alert
            color="danger"
            isOpen={visible}
            className="d-flex justify-content-center mt-3 alert"
          >
            Added deleted from cart!
          </Alert>
        </div>
      )}
    </div>
  );
};

export default Catalogue;
