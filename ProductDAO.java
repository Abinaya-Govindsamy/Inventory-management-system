import java.sql.Connection;
import java.sql.PreparedStatement;

public class ProductDAO {

    public void addProduct(Product product) {

        String sql =
                "INSERT INTO products(name,sku,category,quantity,price) VALUES(?,?,?,?,?)";

        try (
                Connection con = DatabaseConnection.getConnection();
                PreparedStatement ps = con.prepareStatement(sql)
        ) {

            ps.setString(1, product.getName());
            ps.setString(2, product.getSku());
            ps.setString(3, product.getCategory());
            ps.setInt(4, product.getQuantity());
            ps.setDouble(5, product.getPrice());

            ps.executeUpdate();

            System.out.println("Product Added Successfully");

        } catch (Exception e) {

            System.out.println("Error: " + e.getMessage());

        }
    }
}