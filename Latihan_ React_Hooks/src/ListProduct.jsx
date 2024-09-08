import { Component } from "react";
import styles from "./cycle.module.css";

class ListProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      products: [],
      params: {
        limit: 9,
        skip: 0,
      },
      selectedProduct: null, // State for the selected product
    };
  }

  async componentDidMount() {
    await this.fetchProducts(this.state.params);
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.state.params.skip !== prevState.params.skip || this.props.search !== prevProps.search) {
      await this.fetchProducts(this.state.params);
    }
  }

  async fetchProducts(params) {
    const { limit = 9, skip = 0 } = params;
    try {
      this.setState({ loading: true });
      const result = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
      );
      const data = await result.json();
      const filteredProducts = data.products.filter(product =>
        product.title.toLowerCase().includes(this.props.search.toLowerCase())
      );
      this.setState({ products: filteredProducts });
    } catch (error) {
      console.log("error > ", error);
    } finally {
      this.setState({ loading: false });
    }
  }

  handleProductClick = (product) => {
    this.setState({ selectedProduct: product });
  };

  closePopup = () => {
    this.setState({ selectedProduct: null });
  };

  render() {
    const { selectedProduct } = this.state;

    return (
      <div className={styles.container}>
        <h1 className={styles.heading}>Products</h1>
        <div>
          {this.state.loading ? (
            "loading..."
          ) : (
            <div className={styles.productsContainer}>
              {this.state.products?.map((item, idx) => (
                <div
                  key={idx}
                  className={styles.productsItem}
                  onClick={() => this.handleProductClick(item)}
                >
                  <img
                    className={styles.productsItemCover}
                    src={item.images?.[0]}
                    alt={`product-cover-${idx}`}
                  />
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className={styles.paginationContainer}>
          <button
            type="button"
            disabled={this.state.params.skip === 0}
            onClick={() =>
              this.setState((state) => ({
                ...state,
                params: {
                  ...state.params,
                  skip: Math.max(state.params.skip - state.params.limit, 0),
                },
              }))
            }
          >
            Prev
          </button>
          <button
            type="button"
            onClick={() =>
              this.setState((state) => ({
                ...state,
                params: {
                  ...state.params,
                  skip: state.params.skip + state.params.limit,
                },
              }))
            }
          >
            Next
          </button>
        </div>

        {selectedProduct && (
          <div className={styles.popup}>
            <div className={styles.popupContent}>
              <span className={styles.close} onClick={this.closePopup}>&times;</span>
              <img
                className={styles.popupImage}
                src={selectedProduct.images?.[0]}
                alt="product"
              />
              <h2>{selectedProduct.title}</h2>
              <p>{selectedProduct.description}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ListProduct;
