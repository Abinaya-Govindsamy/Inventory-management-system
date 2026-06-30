public class Product {

    private int id;
    private String name;
    private String sku;
    private String category;
    private int quantity;
    private double price;

    public Product() {
    }

    public Product(
            String name,
            String sku,
            String category,
            int quantity,
            double price
    ) {

        this.name = name;
        this.sku = sku;
        this.category = category;
        this.quantity = quantity;
        this.price = price;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public String getSku() {
        return sku;
    }

    public String getCategory() {
        return category;
    }

    public int getQuantity() {
        return quantity;
    }

    public double getPrice() {
        return price;
    }
}