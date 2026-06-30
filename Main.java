public class Main {

    public static void main(String[] args) {

        Product product = new Product(
                "Desk",
                "DS001",
                "Furniture",
                8,
                4500
        );

        ProductDAO dao = new ProductDAO();

        dao.addProduct(product);

    }

}