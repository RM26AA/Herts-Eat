import { StyleSheet } from 'react-native';

//styles for the menu page
const styles = StyleSheet.create({

  //style for food item images

  itemImage: {
    width: '100%',          //takes full width of the container
    height: 150,            //fixed height for consistency
    borderRadius: 10,       //rounded corners for a modern look
    marginBottom: 10,       //spacing below the image
  },

  //enlarged image style (on double-tap)
  enlargedImage: {
    height: 300,                //enlarges height when double-tapped
    borderRadius: 10,           //keeps corners rounded
  },

  //container for the menu header section (title, search bar, filters)
  headerContainer: {
    padding: 20,                      //padding inside the container
    backgroundColor: '#f5f5f5',       //light gray background for contrast
  },

  //title styling (e.g., "Food Menu")
  title: {
    fontSize: 24,               //large font size for emphasis
    fontWeight: 'bold',         //bold font to stand out
    marginBottom: 10,           //space below the title
  },

  //style for the search bar
  searchBar: {
    height: 40,                   //set height for search input
    borderColor: '#ccc',          //light gray border
    borderWidth: 1,               //thin border
    borderRadius: 8,              //rounded corners
    paddingHorizontal: 10,        //padding for text input
    marginBottom: 20,             //space below search bar
    backgroundColor: '#fff',      //white background for input field
  },

  //container for filter buttons (e.g., Starters, Mains, Desserts)
  filterContainer: {
    flexDirection: 'row',                   //aligns filters horizontally
    justifyContent: 'space-between',        //even spacing between buttons
    marginBottom: 20,                       //space below filters
  },

  //individual filter button styling
  filterButton: {
    paddingVertical: 8,             //padding inside button
    paddingHorizontal: 16,          //padding inside button
    borderRadius: 8,                //rounded corners
    borderWidth: 1,                 //thin border
    borderColor: '#ccc',            //light gray border
    backgroundColor: '#fff',        //white background
  },

  //style for the selected filter button (e.g., highlighted category)
  selectedFilter: {
    backgroundColor: '#3cc9b9',       //teal background for active filter
    borderColor: '#197f91',           //darker teal border
  },

  //text style for filter buttons
  filterText: {
    fontSize: 14,           //small text size
    color: '#333',          //dark gray text
  },

  //text style for selected filter button text
  selectedFilterText: {
    color: '#fff',          //white text for contrast on active button
  },

  //style for each food item container
  itemContainer: {
    backgroundColor: '#fff',                        //white background for each item
    borderRadius: 10,                               //rounded corners
    padding: 15,                                    //padding inside item
    marginBottom: 20,                               //space below each item
    marginHorizontal: 20,                           //side margin for consistent spacing
    shadowColor: '#000',                            //shadow color for iOS
    shadowOpacity: 0.1,                             //subtle shadow opacity
    shadowOffset: { width: 0, height: 2 },          //shadow direction
    shadowRadius: 5,                                //shadow blur radius
    elevation: 2,                                   //android shadow
  },

  //container for the item name, rating, and description text
  textContent: {
    marginBottom: 10,                 //space below text block
  },

  //style for food item name (e.g., "Margherita Pizza")
  itemTitle: {
    fontSize: 18,                 //medium-large font
    fontWeight: 'bold',           //bold text
    marginBottom: 5,              //space below title
  },

  //container for the star rating
  ratingContainer: {
    flexDirection: 'row',       //aligns stars and rating horizontally
    alignItems: 'center',       //aligns vertically
    marginBottom: 5,            //space below rating
  },

  //text next to star icons (e.g., "4.5/5")
  ratingText: {
    fontSize: 14,           //small text
    marginLeft: 5,          //space between icon and text
    color: '#555',          //gray text
  },

  //style for food item description text
  descriptionText: {
    fontSize: 14,             //small text
    color: '#777',            //light gray for softer appearance
    marginBottom: 10,         //space below description
  },

  //row for preparation time and delivery cost (icons with text)
  iconRow: {
    flexDirection: 'row',                       //aligns horizontally
    justifyContent: 'space-between',            //space between the two blocks
    marginBottom: 10,                           //space below icon row
  },

  //container for time and delivery cost icon + text
  iconTextContainer: {
    flexDirection: 'row',         //align icon and text horizontally
    alignItems: 'center',         //align vertically
  },

  //text beside the icons (e.g., "15-20 mins")
  iconText: {
    fontSize: 14,         //small text
    marginLeft: 5,        //space between icon and text
    color: '#555',        //gray text
  },

  //action buttons container (e.g., Add to Basket, Review, Favorites)
  actions: {
    flexDirection: 'row',                     //align horizontally
    justifyContent: 'space-between',          //space out buttons evenly
    alignItems: 'center',                     //align vertically
  },

  //footer container holding 'View Favorites' and 'View Basket' buttons
  footerContainer: {
    marginTop: 5,                       //space above footer
    marginBottom: 40,                   //space below footer (above bottom nav)
    padding: 15,                        //padding around the footer content
    alignItems: 'center',               //center content horizontally
  },

  //style for the large action buttons in the footer (e.g., View Basket)
  singleButtonContainer: {
    backgroundColor: '#3cc9b9',       //teal background color
    marginTop: 5,
    marginBottom: 5,
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    width: '100%',                    //full width
    alignItems: 'center',
    bottom: 30,                       //adjusted positioning
  },

  //text inside buttons in footer
  buttonText: {
    color: '#fff',              //white text
    fontSize: 16,               //medium text
    fontWeight: 'bold',         //bold text
  },

  //bottom navigation bar (home, favorites, basket, user)
  bottomNavBar: {
    flexDirection: 'row',                         //align icons horizontally
    justifyContent: 'space-around',               //even spacing for icons
    backgroundColor: '#3cc9b9',                   //teal background color
    paddingVertical: 20,                          //vertical padding for button touch area
    position: 'absolute',                         //fixed at the bottom
    bottom: 0,                                    //align to the bottom
    left: 0,                                      //stretch from left...
    right: 0,                                     //...to right
  },

  //style for each item in bottom navigation (icon + text)
  navItem: {
    alignItems: 'center',         //center both icon and text
    bottom: 10,                   //adjust position upwards a little
  },

  //text below each icon in bottom navigation
  navText: {
    color: '#fff',      //white text for contrast
    fontSize: 12,       //small text
  },

  //style for price text (e.g., £3.99)
  priceText: {
    fontSize: 16,               //medium font size
    color: '#333',              //dark gray for contrast
    fontWeight: 'bold',         //bold to stand out
    marginTop: 5,               //space above the price text
  },
  viewMoreButton: {
    marginTop: 10,
    backgroundColor: '#3cc9b9',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',  // Ensures the button is full width
  },
  viewMoreButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default styles;


