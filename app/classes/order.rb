# Class to parse an 'order' as sent by the front end in the array of orders for a custom search
class Order

  # Constructor method
  def initialize(column, order)
    # Instance variables
    @column, @order = column, order
    # Create search string
    @search_string = @column + " " + @order.upcase
  end

  def column
    @column
  end

  def order
    @order
  end

  def search_string
    @search_string
  end

end