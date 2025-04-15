import { StyleSheet } from 'react-native';

//styles for the review page
const styles = StyleSheet.create({

  //main container for the whole screen

  container: {
    flex: 1,                          //takes up the entire screen
    padding: 20,                      //padding around the content
    backgroundColor: '#f5f5f5',       //light gray background
  },

  //style for enabling scrollability when there are many reviews
  scrollView: {
    flex: 1,                    //allows the scroll view to expand vertically
  },

  //page title style
  title: {
    fontSize: 24,                 //large text size
    fontWeight: 'bold',           //bold text for emphasis
    textAlign: 'center',          //centers the title
    marginBottom: 10,             //space below the title
  },

  //container for star rating display
  ratingContainer: {
    flexDirection: 'row',             //aligns stars horizontally
    justifyContent: 'center',         //centers the stars horizontally
    alignItems: 'center',             //aligns stars vertically
    marginBottom: 5,                  //space below the stars
  },

  //style for the rating text next to stars
  ratingText: {
    marginLeft: 8,                //space to the left of the text
    fontSize: 16,                 //text size
    fontWeight: 'bold',           //bold text
  },

  //subtitle under the rating
  subtitle: {
    textAlign: 'center',          //centers the text
    fontSize: 14,                 //text size
    marginBottom: 20,             //space below the subtitle
    color: '#666',                //gray color for less prominence
  },

  //container for each review card
  reviewContainer: {
    backgroundColor: '#fff',        //white card background
    padding: 15,                    //padding inside the card
    borderRadius: 8,                //rounded corners
    marginBottom: 10,               //space between reviews
  },

  //container for the top section of a review (stars and date)
  reviewHeader: {
    flexDirection: 'row',                     //align stars and date horizontally
    justifyContent: 'space-between',          //space between stars and date
  },

  //container for the stars in each review
  reviewStars: {
    flexDirection: 'row',         //align stars horizontally
  },

  //style for the date text in each review
  reviewDate: {
    fontSize: 12,         //small text size for date
    color: '#999',        //light gray color
  },

  //style for the reviewer's name
  reviewName: {
    fontSize: 16,               //name text size
    fontWeight: 'bold',         //bold for emphasis
    marginVertical: 5,          //space above and below the name
  },

  //style for the review message text
  reviewMessage: {
    fontSize: 14,           //text size
    color: '#333',          //dark gray for readability
  },

  //style when there are no reviews
  noReviewsText: {
    textAlign: 'center',          //centers the text
    fontSize: 14,                 //text size
    color: '#999',                //light gray color
    marginTop: 20,                //space above the message
  },

  //button to add a review
  addReviewButton: {
    backgroundColor: '#3cc9b9',         //teal color for button
    padding: 15,                        //padding inside the button
    borderRadius: 8,                    //rounded corners
    alignItems: 'center',               //centers the button text
    marginTop: 20,                      //space above the button
  },

  //text inside the 'Add Review' button
  addReviewButtonText: {
    color: '#fff',                //white text
    fontSize: 16,                 //text size
    fontWeight: 'bold',           //bold text
  },

  //background overlay when the review modal is open
  modalContainer: {
    flex: 1,                                    //covers the whole screen
    justifyContent: 'center',                   //centers the modal vertically
    alignItems: 'center',                       //centers the modal horizontally
    backgroundColor: 'rgba(0, 0, 0, 0.5)',      //semi-transparent black background
  },

  //modal content box
  modalContent: {
    width: '90%',                         //takes up 90% of the screen width
    backgroundColor: '#fff',              //white background for the form
    padding: 20,                          //inner padding
    borderRadius: 10,                     //rounded corners
  },

  //title text inside the modal
  modalTitle: {
    fontSize: 20,                 //text size
    fontWeight: 'bold',           //bold text
    marginBottom: 15,             //space below the title
    textAlign: 'center',          //centers the title
  },

  //style for text inputs in the modal (Name, Date, Stars)
  input: {
    backgroundColor: '#f5f5f5',         //light gray background
    borderRadius: 8,                    //rounded corners
    padding: 10,                        //inner padding
    marginBottom: 10,                   //space between inputs
    borderWidth: 1,                     //border thickness
    borderColor: '#ccc',                //light gray border color
  },

  //style for larger description text area
  textArea: {
    backgroundColor: '#f5f5f5',           //light gray background
    borderRadius: 8,                      //rounded corners
    padding: 10,                          //inner padding
    height: 80,                           //larger height for description
    marginBottom: 10,                     //space below the text area
    borderWidth: 1,                       //border thickness
    borderColor: '#ccc',                  //light gray border color
  },

  //container for modal buttons (Submit and Cancel)
  modalActions: {
    flexDirection: 'row',                       //aligns buttons horizontally
    justifyContent: 'space-between',            //spaces buttons apart
  },

  //style for individual modal buttons
  modalButton: {
    flex: 1,                                //makes buttons equal size
    backgroundColor: '#3cc9b9',             //teal color
    padding: 10,                            //inner padding
    borderRadius: 8,                        //rounded corners
    marginHorizontal: 5,                    //space between buttons
    alignItems: 'center',                   //centers the text
  },

  //text inside modal buttons
  modalButtonText: {
    color: '#fff',                //white text
    fontWeight: 'bold',           //bold text
    fontSize: 16,                 //text size
  },
});

export default styles;


