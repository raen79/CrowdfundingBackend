# Class CustomSearch to return a custom search result using a model, an array of order hashes, and an array of filter hashes
class CustomSearch
  def initialize(m, page, page_size, orders, filters)
    @model = m
    @sort = Sort.new(orders)
    @filters = Filters.new(filters)
    @page = page
    @page_size = page_size
    @offset_amount = (page.to_i - 1)*page_size.to_i
  end

  # Result of custom search
  def results
    @model.where(@filters.search_string).order(@sort.search_string).offset(@offset_amount).take(@page_size.to_i)
  end

  # Total number of items
  def total_items
    @model.where(@filters.search_string).order(@sort.search_string).size
  end
end