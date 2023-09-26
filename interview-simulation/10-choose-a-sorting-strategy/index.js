//#1 - Sort 10 schools around your house by distance:
//R.: Insertion sort


//#2 - eBay sorts listings by the current Bid amount:
//R.: Insertion sort if the bid are mostly incremental
//R.: radix or counting sort if the kno the bids range are fixed: E.g. from 1 to 100 Dollars


//#3 - Sport scores on ESPN
//R.: Quick sort, because scores varies a lot from sport to sport and also within the same sport
//Merge sort may be a little too much of space complexity


//#4 - Massive database (can't fit all into memory) needs to sort through past year's user data
//R.: Merge sort, because there's a big chance we can run the routine in the background,
//thus memory doesn't matter much


//#5 - Almost sorted Udemy review data needs to update and add 2 new reviews
//R.: Insertion sort, because even though the data is big, probably all past
// data it is sorted on demand. That is: we only have to sort the newly incomming reviews.


//#6 - Temperature Records for the past 50 years in Canada
//R.: Quick sort, if decimals are considered
//R.: Radix or counting sort, if no decimals are considered and all temps are rounded to only their integers


//#7 - Large user name database needs to be sorted. Data is very random.
//R.: Quick sort


//#8 - You want to teach sorting for the first time
//R.: Bubble sort
