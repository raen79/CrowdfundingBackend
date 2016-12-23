# Class to store and interact with an array of orders' attributes as an array of order objects
class Sort

  # Constructor method
  def initialize(orders_attrs = [])
    # Default if param passed but nil
    orders_attrs ||= []

    # Initialize array to store order objects
    @orders = []
    # Initialize string to store sql search string
    @search_string = ""

    # Iterate through each hash of filter attributes
    orders_attrs.each do |order_attrs|
      new_order = Order.new(order_attrs["column"], order_attrs["order"])

      # Push order object to @orders and add to search string only if it contains a search string
      if !new_order.search_string.blank?
        @orders.push(new_order)
        @search_string += new_order.search_string + ","
      end
    end

    # Make sure search string does not have a comma at the end
    !@search_string.blank? ? @search_string.chomp!(",") : nil
  end

  # Return sql search string that uses all orders
  def search_string
    @search_string
  end

  # Return array of order objects
  def view
    @orders
  end

end