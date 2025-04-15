/**
 * Review Screen
 * Date: [08/02/2025]
 * Developer: [R.Maunick]
 * Time: [17:06]
 * Description: This screen acts as the review page. This shows all the reviews for the different items. Every item will have a unique set of reviews.
 * It will show stars for each review, name, date and message.
 */

import {useState} from 'react';
import {View,Text,FlatList,TouchableOpacity,TextInput,Modal,Alert,Keyboard,TouchableWithoutFeedback,} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import styles from '../Styles/ReviewStyles';
import mockReviews from '../Data/ReviewData';

export default function ReviewScreen({ route }) {
  const { itemId, itemName } = route.params;
  const [itemReviews, setItemReviews] = useState(
    mockReviews.filter((review) => review.itemId === itemId)
  );
  const [modalVisible, setModalVisible] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    stars: '',
    date: '',
    message: '',
  });

  const handleAddReview = () => {
    const starsNumber = parseInt(newReview.stars);

    //validate form fields
    if (!newReview.name || !newReview.stars || !newReview.date || !newReview.message) {
      Alert.alert('Error', 'Please fill in all fields before submitting your review.');
      return;
    }

    //validate stars to be between 1 and 5
    if (isNaN(starsNumber) || starsNumber < 1 || starsNumber > 5) {
      Alert.alert('Error', 'Stars must be a number between 1 and 5.');
      return;
    }

    //add new review to the list if validation is passed
    const newReviewEntry = {
      ...newReview,
      id: (itemReviews.length + 1).toString(),
      itemId,
      stars: starsNumber,           //ensure it's treated as a number
    };

    setItemReviews([...itemReviews, newReviewEntry]);

    //clear form and close modal
    setNewReview({ name: '', stars: '', date: '', message: '' });
    setModalVisible(false);
  };

  //handles dismiss of keyboard when tapping outside
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <Text style={styles.title}>{itemName} - Reviews</Text>

        {/* Stars and Rating */}
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={24} color="gold" />
          <Ionicons name="star" size={24} color="gold" />
          <Ionicons name="star" size={24} color="gold" />
          <Ionicons name="star" size={24} color="gold" />
          <Ionicons name="star-outline" size={24} color="gold" />
          <Text style={styles.ratingText}>4/5</Text>
        </View>
        <Text style={styles.subtitle}>Based on the most recent reviews</Text>

        {/* Reviews and Add Review Button */}
        <FlatList
          data={itemReviews}
          keyExtractor={(review) => review.id}
          renderItem={({ item: review }) => (
            <View style={styles.reviewContainer}>
              <View style={styles.reviewHeader}>
                <View style={styles.reviewStars}>
                  {Array.from({ length: review.stars }).map((_, index) => (
                    <Ionicons key={index} name="star" size={16} color="gold" />
                  ))}
                  {Array.from({ length: 5 - review.stars }).map((_, index) => (
                    <Ionicons key={index} name="star-outline" size={16} color="gold" />
                  ))}
                </View>
                <Text style={styles.reviewDate}>{review.date}</Text>
              </View>
              <Text style={styles.reviewName}>{review.name}</Text>
              <Text style={styles.reviewMessage}>{review.message}</Text>
            </View>
          )}
          ListEmptyComponent={
            <Text style={styles.noReviewsText}>No reviews available for this item.</Text>
          }
          ListFooterComponent={
            <TouchableOpacity style={styles.addReviewButton} onPress={() => setModalVisible(true)}>
              <Text style={styles.addReviewButtonText}>Add Review</Text>
            </TouchableOpacity>
          }
          contentContainerStyle={{ paddingBottom: 40 }}
          keyboardShouldPersistTaps="handled"                 //allows tapping to dismiss keyboard
        />

        {/* Modal for Adding Review */}
        <Modal visible={modalVisible} animationType="slide" transparent>
          <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Add a Review</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Your Name"
                  value={newReview.name}
                  onChangeText={(text) => setNewReview({ ...newReview, name: text })}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Stars (1-5)"
                  keyboardType="numeric"
                  value={newReview.stars}
                  onChangeText={(text) => {
                    const cleanedText = text.replace(/[^0-9]/g, '');      //only allow numbers
                    setNewReview({ ...newReview, stars: cleanedText });
                  }}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Date (YYYY-MM-DD)"
                  value={newReview.date}
                  onChangeText={(text) => setNewReview({ ...newReview, date: text })}
                />
                <TextInput
                  style={styles.textArea}
                  placeholder="Your Review"
                  multiline
                  value={newReview.message}
                  onChangeText={(text) => setNewReview({ ...newReview, message: text })}
                />
                <View style={styles.modalActions}>
                  <TouchableOpacity style={styles.modalButton} onPress={handleAddReview}>
                    <Text style={styles.modalButtonText}>Submit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.modalButton}
                    onPress={() => setModalVisible(false)}
                  >
                    <Text style={styles.modalButtonText}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
}
















