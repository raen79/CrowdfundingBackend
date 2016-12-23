# Class to store and interact with an array of filters' attributes as an array of filter objects
class Filters

  # Constructor method
  def initialize(filters_attrs = [])
    # Default if param passed but nil
    filters_attrs ||= []

    # Initialize array to store filter objects
    @filters = []
    # Initialize string to store sql search string
    @search_string = ""

    # Iterate through each hash of filter attributes
    filters_attrs.each do |filter_attrs|
      new_filter = Filter.new(filter_attrs["column"], filter_attrs["value"], filter_attrs["operator"])
      
      # Push filter object to @filters and add to search string only if it contains a search string
      if !new_filter.search_string.blank?
        @filters.push(new_filter)
        @search_string += new_filter.search_string + " AND "
      end
    end

    # Make sure search string does not have an and at the end
    !@search_string.blank? ? @search_string.chomp!(" AND ") : nil
  end

  # Return sql search string that uses all filters
  def search_string
    @search_string
  end

  # Return array of filter objects
  def view
    @filters
  end
end