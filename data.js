/**
 * data.js
 * ---------------------------------------------------------------------------
 * ALL content/cadence rules live here. app.js only reads the output of
 * generateTracker() — it never hardcodes category logic. To customize:
 *
 *   1. Paste your real DSA problems into DSA_PROBLEMS (see format below).
 *   2. Edit DESIGN_PATTERNS (60 entries) with your own list/order.
 *   3. Edit PROJECTS (5 entries) with real titles/descriptions once decided.
 *   4. Edit the *_GENERIC_TASK strings/hours if your course plan changes.
 *
 * Nothing else needs to change — generateTracker() rebuilds all 60 days x
 * 8 tasks from this config every time the page loads.
 * ---------------------------------------------------------------------------
 */

const TOTAL_DAYS = 60;

/* =============================================================================
 * 1. DSA — 30 patterns, ~500 problems, 1 pattern every 2 days
 * =============================================================================
 * FORMAT for DSA_PROBLEMS: flat array of objects, one per LeetCode problem:
 *   {
 *     pattern: "Sliding Window",       // must match a name in DSA_PATTERN_ORDER,
 *                                      // or just appear in the order you want —
 *                                      // patterns are auto-detected from this
 *                                      // array in first-seen order.
 *     problem: "Longest Substring Without Repeating Characters",
 *     number: 3,                      // LeetCode problem number
 *     link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/"
 *   }
 *
 * Just paste your ~500-row list here (or load it from dsa-problems.json —
 * see the loadExternalDSAData() note near the bottom of this file).
 * Patterns are taken in the order they first appear in this array, and each
 * pattern's problems are auto-split roughly in half across its 2 days.
 * If you have fewer than 30 distinct patterns represented, remaining day-pairs
 * will just show a "pattern coming soon" placeholder.
 * ============================================================================= */
const DSA_PROBLEMS = [
  {"pattern": "Two Pointers", "problem": "Merge Sorted Array", "number": 88, "link": "https://leetcode.com/problems/merge-sorted-array/"},
  {"pattern": "Two Pointers", "problem": "Valid Palindrome", "number": 125, "link": "https://leetcode.com/problems/valid-palindrome/"},
  {"pattern": "Two Pointers", "problem": "3Sum", "number": 15, "link": "https://leetcode.com/problems/3sum/"},
  {"pattern": "Two Pointers", "problem": "Remove Nth Node From End of List", "number": 19, "link": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/"},
  {"pattern": "Two Pointers", "problem": "Sort Colors", "number": 75, "link": "https://leetcode.com/problems/sort-colors/"},
  {"pattern": "Two Pointers", "problem": "Reverse Words in a String", "number": 151, "link": "https://leetcode.com/problems/reverse-words-in-a-string/"},
  {"pattern": "Two Pointers", "problem": "Minimum Number of Moves to Make Palindrome", "number": 2193, "link": "https://leetcode.com/problems/minimum-number-of-moves-to-make-palindrome/"},
  {"pattern": "Two Pointers", "problem": "Count Subarrays With Fixed Bounds", "number": 2444, "link": "https://leetcode.com/problems/count-subarrays-with-fixed-bounds/"},
  {"pattern": "Two Pointers", "problem": "Get the Maximum Score", "number": 1537, "link": "https://leetcode.com/problems/get-the-maximum-score/"},
  {"pattern": "Two Pointers", "problem": "Create Maximum Number", "number": 321, "link": "https://leetcode.com/problems/create-maximum-number/"},
  {"pattern": "Two Pointers", "problem": "Valid Word Abbreviation", "number": null, "link": "https://leetcode.com/problems/valid-word-abbreviation/description/"},
  {"pattern": "Two Pointers", "problem": "Strobogrammatic Number", "number": null, "link": "https://leetcode.com/problems/strobogrammatic-number/description/"},
  {"pattern": "Two Pointers", "problem": "Next Palindrome Using Same Digits", "number": null, "link": "https://leetcode.com/problems/next-palindrome-using-same-digits/description/"},
  {"pattern": "Two Pointers", "problem": "Lowest Common Ancestor of a Binary Tree III", "number": null, "link": "https://neetcode.io/problems/lowest-common-ancestor-of-a-binary-tree-iii"},
  {"pattern": "Two Pointers", "problem": "Find the Lexicographically Largest String From Box II", "number": null, "link": "https://leetcode.com/problems/find-the-lexicographically-largest-string-from-the-box-ii/description/"},
  {"pattern": "Two Pointers", "problem": "Append Characters to String to Make Subsequence", "number": 2486, "link": "https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/"},
  {"pattern": "Two Pointers", "problem": "Squares of a Sorted Array", "number": 977, "link": "https://leetcode.com/problems/squares-of-a-sorted-array/"},
  {"pattern": "Two Pointers", "problem": "Reverse String", "number": 344, "link": "https://leetcode.com/problems/reverse-string/"},
  {"pattern": "Two Pointers", "problem": "Valid Palindrome II", "number": 680, "link": "https://leetcode.com/problems/valid-palindrome-ii/"},
  {"pattern": "Two Pointers", "problem": "Count Pairs Whose Sum is Less than Target", "number": 2824, "link": "https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/description/"},
  {"pattern": "Two Pointers", "problem": "Two Sum", "number": 1, "link": "https://leetcode.com/problems/two-sum/description/"},
  {"pattern": "Two Pointers", "problem": "Two Sum II - Input Array Is Sorted", "number": 167, "link": "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/"},
  {"pattern": "Two Pointers", "problem": "Sort Two Colors", "number": null, "link": "https://www.programiz.com/java-programming/online-compiler/"},
  {"pattern": "Fast and Slow Pointers", "problem": "Happy Number", "number": 202, "link": "https://leetcode.com/problems/happy-number/"},
  {"pattern": "Fast and Slow Pointers", "problem": "Linked List Cycle", "number": 141, "link": "https://leetcode.com/problems/linked-list-cycle/"},
  {"pattern": "Fast and Slow Pointers", "problem": "Middle of the Linked List", "number": 876, "link": "https://leetcode.com/problems/middle-of-the-linked-list/"},
  {"pattern": "Fast and Slow Pointers", "problem": "Circular Array Loop", "number": 457, "link": "https://leetcode.com/problems/circular-array-loop/"},
  {"pattern": "Fast and Slow Pointers", "problem": "Find the Duplicate Number", "number": 287, "link": "https://leetcode.com/problems/find-the-duplicate-number/"},
  {"pattern": "Fast and Slow Pointers", "problem": "Palindrome Linked List", "number": 234, "link": "https://leetcode.com/problems/palindrome-linked-list/"},
  {"pattern": "Fast and Slow Pointers", "problem": "Maximum Twin Sum of a Linked List", "number": 2130, "link": "https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/"},
  {"pattern": "Fast and Slow Pointers", "problem": "Split a Circular Linked List", "number": null, "link": "https://leetcode.com/problems/split-a-circular-linked-list/description/"},
  {"pattern": "Fast and Slow Pointers", "problem": "Linked List Cycle II", "number": 142, "link": "https://leetcode.com/problems/linked-list-cycle-ii/description/"},
  {"pattern": "Fast and Slow Pointers", "problem": "Find length of Loop", "number": null, "link": "https://www.geeksforgeeks.org/problems/find-length-of-loop/1"},
  {"pattern": "Heaps", "problem": "IPO", "number": 502, "link": "https://leetcode.com/problems/ipo/"},
  {"pattern": "Heaps", "problem": "Find Median from Data Stream", "number": 295, "link": "https://leetcode.com/problems/find-median-from-data-stream/"},
  {"pattern": "Heaps", "problem": "Sliding Window Median", "number": 480, "link": "https://leetcode.com/problems/sliding-window-median/"},
  {"pattern": "Heaps", "problem": "Task Scheduler", "number": 621, "link": "https://leetcode.com/problems/task-scheduler/"},
  {"pattern": "Heaps", "problem": "Meeting Rooms III", "number": 2402, "link": "https://leetcode.com/problems/meeting-rooms-iii/"},
  {"pattern": "Heaps", "problem": "Largest Number After Digit Swaps by Parity", "number": 2231, "link": "https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/"},
  {"pattern": "Heaps", "problem": "Find Right Interval", "number": 436, "link": "https://leetcode.com/problems/find-right-interval/"},
  {"pattern": "Heaps", "problem": "Minimum Cost of ropes", "number": null, "link": "https://www.geeksforgeeks.org/problems/minimum-cost-of-ropes-1587115620/1"},
  {"pattern": "Heaps", "problem": "Longest Happy String", "number": 1405, "link": "https://leetcode.com/problems/longest-happy-string/"},
  {"pattern": "Heaps", "problem": "Maximum Average Pass Ratio", "number": 1792, "link": "https://leetcode.com/problems/maximum-average-pass-ratio/"},
  {"pattern": "Heaps", "problem": "The Number of the Smallest Unoccupied Chair", "number": 1942, "link": "https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair/"},
  {"pattern": "Heaps", "problem": "Construct Target Array With Multiple Sums", "number": 1354, "link": "https://leetcode.com/problems/construct-target-array-with-multiple-sums/"},
  {"pattern": "Heaps", "problem": "Last Stone Weight", "number": 1046, "link": "https://leetcode.com/problems/last-stone-weight/description/"},
  {"pattern": "Heaps", "problem": "Sliding Window Median", "number": 480, "link": "https://leetcode.com/problems/sliding-window-median/"},
  {"pattern": "Sliding Window", "problem": "Repeated DNA Sequences", "number": 187, "link": "https://leetcode.com/problems/repeated-dna-sequences/"},
  {"pattern": "Sliding Window", "problem": "Sliding Window Maximum", "number": 239, "link": "https://leetcode.com/problems/sliding-window-maximum/"},
  {"pattern": "Sliding Window", "problem": "Minimum Window Subsequence", "number": null, "link": "https://leetcode.com/problems/minimum-window-subsequence/description/"},
  {"pattern": "Sliding Window", "problem": "Longest Repeating Character Replacement", "number": 424, "link": "https://leetcode.com/problems/longest-repeating-character-replacement/"},
  {"pattern": "Sliding Window", "problem": "Minimum Window Substring", "number": 76, "link": "https://leetcode.com/problems/minimum-window-substring/"},
  {"pattern": "Sliding Window", "problem": "Longest Substring Without Repeating Characters", "number": 3, "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters/"},
  {"pattern": "Sliding Window", "problem": "Minimum Size Subarray Sum", "number": 209, "link": "https://leetcode.com/problems/minimum-size-subarray-sum/"},
  {"pattern": "Sliding Window", "problem": "Maximum Average Subarray I", "number": 643, "link": "https://leetcode.com/problems/maximum-average-subarray-i/"},
  {"pattern": "Sliding Window", "problem": "Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold", "number": 1343, "link": "https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/description/"},
  {"pattern": "Sliding Window", "problem": "Fruit Into Baskets", "number": 904, "link": "https://leetcode.com/problems/fruit-into-baskets/"},
  {"pattern": "Sliding Window", "problem": "Contains Duplicate II", "number": 219, "link": "https://leetcode.com/problems/contains-duplicate-ii/"},
  {"pattern": "Sliding Window", "problem": "Frequency of the Most Frequent Element", "number": 1838, "link": "https://leetcode.com/problems/frequency-of-the-most-frequent-element/"},
  {"pattern": "Sliding Window", "problem": "Subarrays with K Different Integers", "number": 992, "link": "https://leetcode.com/problems/subarrays-with-k-different-integers/"},
  {"pattern": "Sliding Window", "problem": "Count Subarrays With Score Less Than K", "number": 2302, "link": "https://leetcode.com/problems/count-subarrays-with-score-less-than-k/"},
  {"pattern": "Sliding Window", "problem": "Count Substrings With K-Frequency Characters II", "number": null, "link": "https://leetcode.com/problems/count-substrings-with-k-frequency-characters-ii/description/"},
  {"pattern": "Sliding Window", "problem": "Maximum Sum of Distinct Subarrays With Length K", "number": 2461, "link": "https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/description/"},
  {"pattern": "Sliding Window", "problem": "Max Sum Subarray of size K", "number": null, "link": "https://www.geeksforgeeks.org/problems/max-sum-subarray-of-size-k5313/1"},
  {"pattern": "Sliding Window", "problem": "Rabin Karp Algorithm", "number": null, "link": "https://leetcode.com/problems/repeated-dna-sequences/"},
  {"pattern": "Sliding Window", "problem": "Longest Substring Without Repeating Characters (Map Approach)", "number": 3, "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters/"},
  {"pattern": "Intervals", "problem": "Merge Intervals", "number": 56, "link": "https://leetcode.com/problems/merge-intervals/"},
  {"pattern": "Intervals", "problem": "Insert Interval", "number": 57, "link": "https://leetcode.com/problems/insert-interval/"},
  {"pattern": "Intervals", "problem": "Interval List Intersections", "number": 986, "link": "https://leetcode.com/problems/interval-list-intersections/"},
  {"pattern": "Intervals", "problem": "Employee Free Time", "number": null, "link": "https://leetcode.com/problems/employee-free-time/description/"},
  {"pattern": "Intervals", "problem": "Count Days Without Meetings (Approach 1)", "number": 3169, "link": "https://leetcode.com/problems/count-days-without-meetings/"},
  {"pattern": "Intervals", "problem": "Remove Covered Intervals", "number": 1288, "link": "https://leetcode.com/problems/remove-covered-intervals/"},
  {"pattern": "Intervals", "problem": "Car Pooling", "number": 1094, "link": "https://leetcode.com/problems/car-pooling/"},
  {"pattern": "Intervals", "problem": "Data Stream as Disjoint Intervals (Brute Force + TreeSet)", "number": 352, "link": "https://leetcode.com/problems/data-stream-as-disjoint-intervals/"},
  {"pattern": "Intervals", "problem": "Meeting Rooms II (Line Sweep)", "number": null, "link": "https://www.geeksforgeeks.org/problems/attend-all-meetings-ii/1"},
  {"pattern": "Intervals", "problem": "Merge Intervals (Brute Force)", "number": 56, "link": "https://leetcode.com/problems/merge-intervals/"},
  {"pattern": "Intervals", "problem": "Count Days Without Meetings (Approach 2)", "number": 3169, "link": "https://leetcode.com/problems/count-days-without-meetings/"},
  {"pattern": "Intervals", "problem": "Count Days Without Meetings (Approach 3)", "number": 3169, "link": "https://leetcode.com/problems/count-days-without-meetings/"},
  {"pattern": "Intervals", "problem": "Line Sweep Algorithm", "number": null, "link": ""},
  {"pattern": "Intervals", "problem": "TreeMap + Lab", "number": null, "link": ""},
  {"pattern": "Intervals", "problem": "My Calendar II", "number": 731, "link": "https://leetcode.com/problems/my-calendar-ii/description/"},
  {"pattern": "Intervals", "problem": "Meeting Rooms", "number": null, "link": "https://www.geeksforgeeks.org/problems/attend-all-meetings/1"},
  {"pattern": "Intervals", "problem": "My Calendar I (Brute Force + Line Sweep)", "number": 729, "link": "https://leetcode.com/problems/my-calendar-i/description/"},
  {"pattern": "Intervals", "problem": "My Calendar III (Line Sweep)", "number": 732, "link": "https://leetcode.com/problems/my-calendar-iii/description/"},
  {"pattern": "Intervals", "problem": "My Calendar I (Optimised)", "number": 729, "link": "https://leetcode.com/problems/my-calendar-i/description/"},
  {"pattern": "Intervals", "problem": "Meeting Rooms II (Heap)", "number": null, "link": "https://www.geeksforgeeks.org/problems/attend-all-meetings-ii/1"},
  {"pattern": "Intervals", "problem": "Meeting Rooms II (Two Pointer)", "number": null, "link": "https://www.geeksforgeeks.org/problems/attend-all-meetings-ii/1"},
  {"pattern": "Intervals", "problem": "Data Stream as Disjoint Intervals (TreeMap)", "number": 352, "link": "https://leetcode.com/problems/data-stream-as-disjoint-intervals/"},
  {"pattern": "Linked List In-Place Manipulati", "problem": "Reverse Linked List", "number": 206, "link": "https://leetcode.com/problems/reverse-linked-list/"},
  {"pattern": "Linked List In-Place Manipulati", "problem": "Reverse Nodes in k-Group", "number": 25, "link": "https://leetcode.com/problems/reverse-nodes-in-k-group/"},
  {"pattern": "Linked List In-Place Manipulati", "problem": "Reverse Linked List II", "number": 92, "link": "https://leetcode.com/problems/reverse-linked-list-ii/"},
  {"pattern": "Linked List In-Place Manipulati", "problem": "Reorder List", "number": 143, "link": "https://leetcode.com/problems/reorder-list/"},
  {"pattern": "Linked List In-Place Manipulati", "problem": "Swapping Nodes in a Linked List", "number": 1721, "link": "https://leetcode.com/problems/swapping-nodes-in-a-linked-list/"},
  {"pattern": "Linked List In-Place Manipulati", "problem": "Reverse Nodes in Even Length Groups", "number": 2074, "link": "https://leetcode.com/problems/reverse-nodes-in-even-length-groups/"},
  {"pattern": "Linked List In-Place Manipulati", "problem": "Remove Duplicates from Sorted List", "number": 83, "link": "https://leetcode.com/problems/remove-duplicates-from-sorted-list/"},
  {"pattern": "Linked List In-Place Manipulati", "problem": "Remove Linked List Elements", "number": 203, "link": "https://leetcode.com/problems/remove-linked-list-elements/"},
  {"pattern": "Linked List In-Place Manipulati", "problem": "Split Linked List in Parts", "number": 725, "link": "https://leetcode.com/problems/split-linked-list-in-parts/"},
  {"pattern": "Linked List In-Place Manipulati", "problem": "Delete N Nodes After M Nodes of a Linked List", "number": null, "link": "https://leetcode.com/problems/delete-n-nodes-after-m-nodes-of-a-linked-list/description/"},
  {"pattern": "Linked List In-Place Manipulati", "problem": "Insert into a Sorted Circular Linked List", "number": null, "link": "https://neetcode.io/problems/insert-into-a-sorted-circular-linked-list/question"},
  {"pattern": "Linked List In-Place Manipulati", "problem": "Odd Even Linked List", "number": 328, "link": "https://leetcode.com/problems/odd-even-linked-list/"},
  {"pattern": "Linked List In-Place Manipulati", "problem": "Swap Nodes in Pairs", "number": 24, "link": "https://leetcode.com/problems/swap-nodes-in-pairs/description/"},
  {"pattern": "Linked List In-Place Manipulati", "problem": "Dummy Node Concept (Theory)", "number": null, "link": ""},
  {"pattern": "K-way merge", "problem": "Merge Sorted Array", "number": 88, "link": "https://leetcode.com/problems/merge-sorted-array/"},
  {"pattern": "K-way merge", "problem": "Find the Kth Smallest Sum of a Matrix With Sorted Rows", "number": 1439, "link": "https://leetcode.com/problems/find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows/description/"},
  {"pattern": "K-way merge", "problem": "Find K Pairs with Smallest Sums", "number": 373, "link": "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/"},
  {"pattern": "K-way merge", "problem": "Merge k Sorted Lists", "number": 23, "link": "https://leetcode.com/problems/merge-k-sorted-lists/"},
  {"pattern": "K-way merge", "problem": "Kth Smallest Element in a Sorted Matrix", "number": null, "link": "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/"},
  {"pattern": "K-way merge", "problem": "K-th Smallest Prime Fraction", "number": 786, "link": "https://leetcode.com/problems/k-th-smallest-prime-fraction/"},
  {"pattern": "K-way merge", "problem": "Super Ugly Number", "number": 313, "link": "https://leetcode.com/problems/super-ugly-number/"},
  {"pattern": "K-way merge", "problem": "Find m-th smallest value in k sorted arrays", "number": null, "link": "https://www.geeksforgeeks.org/dsa/find-m-th-smallest-value-in-k-sorted-arrays/"},
  {"pattern": "K-way merge", "problem": "Merge Two Sorted Lists", "number": 21, "link": "https://leetcode.com/problems/merge-two-sorted-lists/description/"},
  {"pattern": "Top K Elements", "problem": "Kth Largest Element in a Stream", "number": 703, "link": "https://leetcode.com/problems/kth-largest-element-in-a-stream/"},
  {"pattern": "Top K Elements", "problem": "Reorganize String", "number": 767, "link": "https://leetcode.com/problems/reorganize-string/"},
  {"pattern": "Top K Elements", "problem": "K Closest Points to Origin", "number": 973, "link": "https://leetcode.com/problems/k-closest-points-to-origin/"},
  {"pattern": "Top K Elements", "problem": "Top K Frequent Elements", "number": 347, "link": "https://leetcode.com/problems/top-k-frequent-elements/"},
  {"pattern": "Top K Elements", "problem": "Kth Largest Element in an Array", "number": 215, "link": "https://leetcode.com/problems/kth-largest-element-in-an-array/"},
  {"pattern": "Top K Elements", "problem": "Third Maximum Number", "number": 414, "link": "https://leetcode.com/problems/third-maximum-number/"},
  {"pattern": "Top K Elements", "problem": "Find Subsequence of Length K With the Largest Sum", "number": 2099, "link": "https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/"},
  {"pattern": "Top K Elements", "problem": "Minimum Cost to Hire K Workers", "number": 857, "link": "https://leetcode.com/problems/minimum-cost-to-hire-k-workers/"},
  {"pattern": "Top K Elements", "problem": "Maximal Score After Applying K Operations", "number": 2530, "link": "https://leetcode.com/problems/maximal-score-after-applying-k-operations/"},
  {"pattern": "Top K Elements", "problem": "Find the Kth Largest Integer in the Array", "number": 1985, "link": "https://leetcode.com/problems/find-the-kth-largest-integer-in-the-array/"},
  {"pattern": "Top K Elements", "problem": "Maximum Performance of a Team", "number": 1383, "link": "https://leetcode.com/problems/maximum-performance-of-a-team/"},
  {"pattern": "Top K Elements", "problem": "Smallest Range Covering Elements from K Lists", "number": 632, "link": "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/"},
  {"pattern": "Top K Elements", "problem": "K Empty Slots", "number": 683, "link": "https://leetcode.com/problems/k-empty-slots/"},
  {"pattern": "Top K Elements", "problem": "Choose K Elements With Maximum Sum", "number": 3478, "link": "https://leetcode.com/problems/choose-k-elements-with-maximum-sum/description/"},
  {"pattern": "Top K Elements", "problem": "Maximum Product After K Increments", "number": 2233, "link": "https://leetcode.com/problems/maximum-product-after-k-increments/"},
  {"pattern": "Top K Elements", "problem": "Find the K-Sum of an Array", "number": 2386, "link": "https://leetcode.com/problems/find-the-k-sum-of-an-array/"},
  {"pattern": "Top K Elements", "problem": "Least Number of Unique Integers after K Removals", "number": 1481, "link": "https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/"},
  {"pattern": "Top K Elements", "problem": "Final Array State After K Multiplication Operations I", "number": 3264, "link": "https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-i/"},
  {"pattern": "Top K Elements", "problem": "Final Array State After K Multiplication Operations II", "number": 3266, "link": "https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-ii/description/"},
  {"pattern": "Binary Search", "problem": "Binary Search", "number": 704, "link": "https://leetcode.com/problems/binary-search/description/"},
  {"pattern": "Binary Search", "problem": "Search in Rotated Sorted Array", "number": 33, "link": "https://leetcode.com/problems/search-in-rotated-sorted-array/description/"},
  {"pattern": "Binary Search", "problem": "First Bad Version", "number": 278, "link": "https://leetcode.com/problems/first-bad-version/"},
  {"pattern": "Binary Search", "problem": "Random Pick with Weight", "number": 528, "link": "https://leetcode.com/problems/random-pick-with-weight/"},
  {"pattern": "Binary Search", "problem": "Find K Closest Elements", "number": 658, "link": "https://leetcode.com/problems/find-k-closest-elements/"},
  {"pattern": "Binary Search", "problem": "Single Element in a Sorted Array", "number": 540, "link": "https://leetcode.com/problems/single-element-in-a-sorted-array/"},
  {"pattern": "Binary Search", "problem": "Maximum Value at a Given Index in a Bounded Array", "number": 1802, "link": "https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/"},
  {"pattern": "Binary Search", "problem": "The K Weakest Rows in a Matrix", "number": 1337, "link": "https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/"},
  {"pattern": "Binary Search", "problem": "Split Array Largest Sum", "number": 410, "link": "https://leetcode.com/problems/split-array-largest-sum/"},
  {"pattern": "Binary Search", "problem": "Find Minimum in Rotated Sorted Array II", "number": 154, "link": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/"},
  {"pattern": "Binary Search", "problem": "Maximum Running Time of N Computers", "number": 2141, "link": "https://leetcode.com/problems/maximum-running-time-of-n-computers/description/"},
  {"pattern": "Binary Search", "problem": "Minimize Max Distance to Gas Station", "number": 774, "link": "https://leetcode.com/problems/minimize-max-distance-to-gas-station/"},
  {"pattern": "Binary Search", "problem": "Divide Chocolate", "number": 1231, "link": "https://leetcode.com/problems/divide-chocolate/"},
  {"pattern": "Binary Search", "problem": "Partition Array Into Two Arrays to Minimize Sum Difference", "number": 2035, "link": "https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/description/"},
  {"pattern": "Binary Search", "problem": "Number of Flowers in Full Bloom", "number": 2251, "link": "https://leetcode.com/problems/number-of-flowers-in-full-bloom/description/"},
  {"pattern": "Binary Search", "problem": "Koko Eating Bananas", "number": 875, "link": "https://leetcode.com/problems/koko-eating-bananas/description/"},
  {"pattern": "Binary Search", "problem": "Search in Rotated Sorted Array II", "number": 81, "link": "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/description/"},
  {"pattern": "Binary Search", "problem": "Find Peak Element", "number": 162, "link": "https://leetcode.com/problems/find-peak-element/description/"},
  {"pattern": "Binary Search", "problem": "Find First and Last Position of Element in Sorted Array", "number": 34, "link": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/"},
  {"pattern": "Binary Search", "problem": "Sqrt(x)", "number": 69, "link": "https://leetcode.com/problems/sqrtx/description/"},
  {"pattern": "Binary Search", "problem": "Find Minimum in Rotated Sorted Array", "number": 153, "link": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/"},
  {"pattern": "Binary Search", "problem": "Single Element in a Sorted Array", "number": 540, "link": "https://leetcode.com/problems/single-element-in-a-sorted-array/"},
  {"pattern": "Binary Search", "problem": "The K Weakest Rows in a Matrix", "number": 1337, "link": "https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/"},
  {"pattern": "Binary Search", "problem": "Find K Closest Elements", "number": 658, "link": "https://leetcode.com/problems/find-k-closest-elements/"},
  {"pattern": "Binary Search", "problem": "Binary Search on Answer", "number": null, "link": "Theory"},
  {"pattern": "Cyclic Sort", "problem": "Cyclic Sort", "number": null, "link": "How cyclic sort works?"},
  {"pattern": "Cyclic Sort", "problem": "Missing Number", "number": 268, "link": "https://leetcode.com/problems/missing-number/"},
  {"pattern": "Cyclic Sort", "problem": "First Missing Positive", "number": 41, "link": "https://leetcode.com/problems/first-missing-positive/"},
  {"pattern": "Cyclic Sort", "problem": "Set Mismatch", "number": 645, "link": "https://leetcode.com/problems/set-mismatch/"},
  {"pattern": "Cyclic Sort", "problem": "Find All Numbers Disappeared in an Array", "number": 448, "link": "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/"},
  {"pattern": "Cyclic Sort", "problem": "Find the Duplicate Number", "number": 287, "link": "https://leetcode.com/problems/find-the-duplicate-number/description/"},
  {"pattern": "Subsets", "problem": "Subsets", "number": 78, "link": "https://leetcode.com/problems/subsets/"},
  {"pattern": "Subsets", "problem": "Permutations", "number": 46, "link": "https://leetcode.com/problems/permutations/"},
  {"pattern": "Subsets", "problem": "Letter Combinations of a Phone Number", "number": 17, "link": "https://leetcode.com/problems/letter-combinations-of-a-phone-number/"},
  {"pattern": "Subsets", "problem": "Generate Parentheses", "number": 22, "link": "https://leetcode.com/problems/generate-parentheses/"},
  {"pattern": "Subsets", "problem": "Letter Case Permutation", "number": 784, "link": "https://leetcode.com/problems/letter-case-permutation/"},
  {"pattern": "Subsets", "problem": "Letter Tile Possibilities", "number": 1079, "link": "https://leetcode.com/problems/letter-tile-possibilities/"},
  {"pattern": "Subsets", "problem": "Partition to K Equal Sum Subsets", "number": 698, "link": "https://leetcode.com/problems/find-the-k-sum-of-an-array/"},
  {"pattern": "Subsets", "problem": "Partition Array Into Two Arrays to Minimize Sum Difference", "number": 2035, "link": "https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/description/"},
  {"pattern": "Subsets", "problem": "Subsets II", "number": 90, "link": "https://leetcode.com/problems/subsets-ii/description/"},
  {"pattern": "Subsets", "problem": "Permutations II", "number": 47, "link": "https://leetcode.com/problems/permutations-ii/description/"},
  {"pattern": "Subsets", "problem": "Permutations III", "number": 3437, "link": "https://leetcode.com/problems/permutations-iii/description/"},
  {"pattern": "Subsets", "problem": "Permutations IV", "number": 3470, "link": "https://leetcode.com/problems/permutations-iv/description/"},
  {"pattern": "Greedy Programming", "problem": "Maximum Swap", "number": 670, "link": "https://leetcode.com/problems/maximum-swap/"},
  {"pattern": "Greedy Programming", "problem": "Can Place Flowers", "number": 605, "link": "https://leetcode.com/problems/can-place-flowers/"},
  {"pattern": "Greedy Programming", "problem": "Largest Odd Number in String", "number": 1903, "link": "https://leetcode.com/problems/largest-odd-number-in-string/"},
  {"pattern": "Greedy Programming", "problem": "Candy", "number": 135, "link": "https://leetcode.com/problems/candy/description/"},
  {"pattern": "Greedy Programming", "problem": "Minimum Replacements to Sort the Array", "number": 2366, "link": "https://leetcode.com/problems/minimum-replacements-to-sort-the-array/"},
  {"pattern": "Greedy Programming", "problem": "Jump Game II", "number": 45, "link": "https://leetcode.com/problems/jump-game-ii/"},
  {"pattern": "Greedy Programming", "problem": "Best Time to Buy and Sell Stock", "number": 121, "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"},
  {"pattern": "Greedy Programming", "problem": "Jump Game", "number": 55, "link": "https://leetcode.com/problems/jump-game/description/"},
  {"pattern": "Greedy Programming", "problem": "Boats to Save People", "number": 881, "link": "https://leetcode.com/problems/boats-to-save-people/description/"},
  {"pattern": "Greedy Programming", "problem": "Gas Station", "number": 134, "link": "https://leetcode.com/problems/gas-station/description/"},
  {"pattern": "Greedy Programming", "problem": "Two City Scheduling", "number": 1029, "link": "https://leetcode.com/problems/two-city-scheduling/description/"},
  {"pattern": "Greedy Programming", "problem": "Minimum Number of Refueling Stops", "number": 871, "link": "https://leetcode.com/problems/minimum-number-of-refueling-stops/description/"},
  {"pattern": "Greedy Programming", "problem": "Best Time to Buy and Sell Stock II", "number": 122, "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/"},
  {"pattern": "Backtracking", "problem": "N-Queens II", "number": 52, "link": "https://leetcode.com/problems/n-queens-ii/"},
  {"pattern": "Backtracking", "problem": "Word Search", "number": 79, "link": "https://leetcode.com/problems/word-search/"},
  {"pattern": "Backtracking", "problem": "House Robber III", "number": 337, "link": "https://leetcode.com/problems/house-robber-iii/"},
  {"pattern": "Backtracking", "problem": "Restore IP Addresses", "number": 93, "link": "https://leetcode.com/problems/restore-ip-addresses/"},
  {"pattern": "Backtracking", "problem": "Flood Fill", "number": 733, "link": "https://leetcode.com/problems/flood-fill/"},
  {"pattern": "Backtracking", "problem": "Minimum Moves to Spread Stones Over Grid", "number": 2850, "link": "https://leetcode.com/problems/minimum-moves-to-spread-stones-over-grid/"},
  {"pattern": "Backtracking", "problem": "Binary Tree Paths", "number": 257, "link": "https://leetcode.com/problems/binary-tree-paths/"},
  {"pattern": "Backtracking", "problem": "Binary Watch", "number": 401, "link": "https://leetcode.com/problems/binary-watch/"},
  {"pattern": "Backtracking", "problem": "Optimal Account Balancing", "number": 465, "link": "https://leetcode.com/problems/optimal-account-balancing/"},
  {"pattern": "Backtracking", "problem": "Split a String Into the Max Number of Unique Substrings", "number": 1593, "link": "https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/"},
  {"pattern": "Backtracking", "problem": "All Paths From Source to Target", "number": 797, "link": "https://leetcode.com/problems/all-paths-from-source-to-target/"},
  {"pattern": "Backtracking", "problem": "Remove Invalid Parentheses", "number": 301, "link": "https://leetcode.com/problems/remove-invalid-parentheses/"},
  {"pattern": "Backtracking", "problem": "N-Queens", "number": 51, "link": "https://leetcode.com/problems/n-queens/"},
  {"pattern": "Backtracking", "problem": "Unique Paths III", "number": 980, "link": "https://leetcode.com/problems/unique-paths-iii/"},
  {"pattern": "Backtracking", "problem": "Combinations", "number": 77, "link": "https://leetcode.com/problems/combinations/"},
  {"pattern": "Backtracking", "problem": "Sudoku Solver", "number": 37, "link": "https://leetcode.com/problems/sudoku-solver/"},
  {"pattern": "Backtracking", "problem": "Matchsticks to Square", "number": 473, "link": "https://leetcode.com/problems/matchsticks-to-square/"},
  {"pattern": "Dynamic Programming", "problem": "Partition Equal Subset Sum", "number": 416, "link": "https://leetcode.com/problems/partition-equal-subset-sum/"},
  {"pattern": "Dynamic Programming", "problem": "Coin Change", "number": 322, "link": "https://leetcode.com/problems/coin-change/"},
  {"pattern": "Dynamic Programming", "problem": "N-th Tribonacci Number", "number": 1137, "link": "https://leetcode.com/problems/n-th-tribonacci-number/"},
  {"pattern": "Dynamic Programming", "problem": "Partition Equal Subset Sum", "number": 416, "link": "https://leetcode.com/problems/partition-equal-subset-sum/"},
  {"pattern": "Dynamic Programming", "problem": "Counting Bits", "number": 338, "link": "https://leetcode.com/problems/counting-bits/"},
  {"pattern": "Dynamic Programming", "problem": "01 Matrix", "number": 542, "link": "https://leetcode.com/problems/01-matrix/"},
  {"pattern": "Dynamic Programming", "problem": "House Robber II", "number": 213, "link": "https://leetcode.com/problems/house-robber-ii/"},
  {"pattern": "Dynamic Programming", "problem": "Maximum Product Subarray", "number": 152, "link": "https://leetcode.com/problems/maximum-product-subarray/"},
  {"pattern": "Dynamic Programming", "problem": "Combination Sum", "number": 39, "link": "https://leetcode.com/problems/combination-sum/"},
  {"pattern": "Dynamic Programming", "problem": "Word Break", "number": 139, "link": "https://leetcode.com/problems/word-break/"},
  {"pattern": "Dynamic Programming", "problem": "Palindromic Substrings", "number": 647, "link": "https://leetcode.com/problems/palindromic-substrings/"},
  {"pattern": "Dynamic Programming", "problem": "Longest Common Subsequence", "number": 1143, "link": "https://leetcode.com/problems/longest-common-subsequence/"},
  {"pattern": "Dynamic Programming", "problem": "Word Break II", "number": 140, "link": "https://leetcode.com/problems/word-break-ii/"},
  {"pattern": "Dynamic Programming", "problem": "Decode Ways", "number": 91, "link": "https://leetcode.com/problems/decode-ways/"},
  {"pattern": "Dynamic Programming", "problem": "Count the Number of Good Subsequences", "number": 1987, "link": "https://leetcode.com/problems/number-of-unique-good-subsequences/"},
  {"pattern": "Dynamic Programming", "problem": "Binary Tree Cameras", "number": 968, "link": "https://leetcode.com/problems/binary-tree-cameras/"},
  {"pattern": "Dynamic Programming", "problem": "Number of Ways to Form Target String Given a Dictionary", "number": 1639, "link": "https://leetcode.com/problems/number-of-ways-to-form-a-target-string-given-a-dictionary/"},
  {"pattern": "Dynamic Programming", "problem": "Pascal\u2019s Triangle", "number": 118, "link": "https://leetcode.com/problems/pascals-triangle/"},
  {"pattern": "Dynamic Programming", "problem": "Triangle", "number": 120, "link": "https://leetcode.com/problems/triangle/"},
  {"pattern": "Dynamic Programming", "problem": "Climbing Stairs", "number": 70, "link": "https://leetcode.com/problems/climbing-stairs/"},
  {"pattern": "Topological Sort", "problem": "Compilation Order (Similar to 210 - Course Schedule II)", "number": null, "link": "https://leetcode.com/problems/course-schedule-ii/"},
  {"pattern": "Topological Sort", "problem": "Alien Dictionary", "number": 269, "link": "https://leetcode.com/problems/alien-dictionary/"},
  {"pattern": "Topological Sort", "problem": "Verifying an Alien Dictionary", "number": 953, "link": "https://leetcode.com/problems/verifying-an-alien-dictionary/"},
  {"pattern": "Topological Sort", "problem": "Course Schedule II", "number": 210, "link": "https://leetcode.com/problems/course-schedule-ii/"},
  {"pattern": "Topological Sort", "problem": "Course Schedule", "number": 207, "link": "https://leetcode.com/problems/course-schedule/"},
  {"pattern": "Topological Sort", "problem": "Build a Matrix with Conditions", "number": 2392, "link": "https://leetcode.com/problems/build-a-matrix-with-conditions/"},
  {"pattern": "Topological Sort", "problem": "Longest Path With Different Adjacent Characters", "number": 2246, "link": "https://leetcode.com/problems/longest-path-with-different-adjacent-characters/"},
  {"pattern": "Topological Sort", "problem": "Parallel Courses III", "number": 2050, "link": "https://leetcode.com/problems/parallel-courses-iii/"},
  {"pattern": "Topological Sort", "problem": "Find All Possible Recipes from Given Supplies", "number": 2115, "link": "https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/"},
  {"pattern": "Sort and Search", "problem": "Find the Distance Value Between Two Arrays", "number": 1385, "link": "https://leetcode.com/problems/find-the-distance-value-between-two-arrays/"},
  {"pattern": "Sort and Search", "problem": "Longest Subsequence With Limited Sum", "number": 2389, "link": "https://leetcode.com/problems/longest-subsequence-with-limited-sum/"},
  {"pattern": "Sort and Search", "problem": "Find Target Indices After Sorting Array", "number": 2089, "link": "https://leetcode.com/problems/find-target-indices-after-sorting-array/"},
  {"pattern": "Sort and Search", "problem": "Count Pairs in Two Arrays", "number": 1537, "link": "https://leetcode.com/problems/count-pairs-in-two-arrays/"},
  {"pattern": "Sort and Search", "problem": "Valid Triangle Number", "number": 611, "link": "https://leetcode.com/problems/valid-triangle-number/"},
  {"pattern": "Sort and Search", "problem": "Minimum Operations to Make All Array Elements Equal", "number": 2602, "link": "https://leetcode.com/problems/minimum-operations-to-make-all-array-elements-equal/"},
  {"pattern": "Sort and Search", "problem": "Sum of Mutated Array Closest to Target", "number": 1300, "link": "https://leetcode.com/problems/sum-of-mutated-array-closest-to-target/"},
  {"pattern": "Sort and Search", "problem": "Range Sum of Sorted Subarray Sums", "number": 1508, "link": "https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/"},
  {"pattern": "Sort and Search", "problem": "Magnetic Force Between Two Balls", "number": 1552, "link": "https://leetcode.com/problems/magnetic-force-between-two-balls/"},
  {"pattern": "Sort and Search", "problem": "Find K-th Smallest Pair Distance", "number": 719, "link": "https://leetcode.com/problems/find-k-th-smallest-pair-distance/"},
  {"pattern": "Sort and Search", "problem": "Minimum Space Wasted from Packaging", "number": 1889, "link": "https://leetcode.com/problems/minimum-space-wasted-from-packaging/"},
  {"pattern": "Sort and Search", "problem": "Russian Doll Envelopes", "number": 354, "link": "https://leetcode.com/problems/russian-doll-envelopes/"},
  {"pattern": "Sort and Search", "problem": "Put Marbles in Bags", "number": 2551, "link": "https://leetcode.com/problems/put-marbles-in-bags/"},
  {"pattern": "Sort and Search", "problem": "H-Index", "number": 274, "link": "https://leetcode.com/problems/h-index/"},
  {"pattern": "Sort and Search", "problem": "Two Sum Less Than K", "number": 1099, "link": "https://leetcode.com/problems/two-sum-less-than-k/"},
  {"pattern": "Sort and Search", "problem": "Maximum Number of Integers to Choose from a Range I", "number": 2554, "link": "https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-i/"},
  {"pattern": "Matrices", "problem": "Set Matrix Zeroes", "number": 73, "link": "https://leetcode.com/problems/set-matrix-zeroes/"},
  {"pattern": "Matrices", "problem": "Rotate Image", "number": 48, "link": "https://leetcode.com/problems/rotate-image/"},
  {"pattern": "Matrices", "problem": "Spiral Matrix", "number": 54, "link": "https://leetcode.com/problems/spiral-matrix/"},
  {"pattern": "Matrices", "problem": "Where Will the Ball Fall", "number": 1706, "link": "https://leetcode.com/problems/where-will-the-ball-fall/"},
  {"pattern": "Matrices", "problem": "Transpose Matrix", "number": 867, "link": "https://leetcode.com/problems/transpose-matrix/"},
  {"pattern": "Matrices", "problem": "Count Negative Numbers in a Sorted Matrix", "number": 1351, "link": "https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/"},
  {"pattern": "Matrices", "problem": "Minimum Time Takes to Reach Destination Without Drowning", "number": 2812, "link": "https://leetcode.com/problems/find-the-safest-path-in-a-grid/"},
  {"pattern": "Matrices", "problem": "Smallest Rectangle Enclosing Black Pixels", "number": 302, "link": "https://leetcode.com/problems/smallest-rectangle-enclosing-black-pixels/"},
  {"pattern": "Matrices", "problem": "Island Perimeter", "number": 463, "link": "https://leetcode.com/problems/island-perimeter/"},
  {"pattern": "Matrices", "problem": "Convert 1D Array Into 2D Array", "number": 2022, "link": "https://leetcode.com/problems/convert-1d-array-into-2d-array/"},
  {"pattern": "Matrices", "problem": "Spiral Matrix II", "number": 59, "link": "https://leetcode.com/problems/spiral-matrix-ii/"},
  {"pattern": "Matrices", "problem": "Flip Columns For Maximum Number of Equal Rows", "number": 1072, "link": "https://leetcode.com/problems/flip-columns-for-maximum-number-of-equal-rows/"},
  {"pattern": "Matrices", "problem": "Number of Spaces Cleaning Robot Cleaned", "number": 2061, "link": "https://leetcode.com/problems/number-of-spaces-cleaning-robot-cleaned/"},
  {"pattern": "Matrices", "problem": "Minimize Maximum Value in a Grid (2537 - Closest related concept, but no direct problem with this exact title)", "number": null, "link": "https://leetcode.com/problems/minimum-operations-to-make-array-equal-ii/"},
  {"pattern": "Matrices", "problem": "Kth Smallest Number in Multiplication Table", "number": 668, "link": "https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/"},
  {"pattern": "Matrices", "problem": "Swim in Rising Water", "number": 778, "link": "https://leetcode.com/problems/swim-in-rising-water/"},
  {"pattern": "Matrices", "problem": "Best Meeting Point", "number": 296, "link": "https://leetcode.com/problems/best-meeting-point/"},
  {"pattern": "Matrices", "problem": "Game of Life", "number": 289, "link": "https://leetcode.com/problems/game-of-life/"},
  {"pattern": "Stacks", "problem": "Basic Calculator", "number": 224, "link": "https://leetcode.com/problems/basic-calculator/"},
  {"pattern": "Stacks", "problem": "Remove All Adjacent Duplicates In String", "number": 1047, "link": "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/"},
  {"pattern": "Stacks", "problem": "Minimum Remove to Make Valid Parentheses", "number": 1249, "link": "https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/"},
  {"pattern": "Stacks", "problem": "Exclusive Time of Functions", "number": 636, "link": "https://leetcode.com/problems/exclusive-time-of-functions/"},
  {"pattern": "Stacks", "problem": "Flatten Nested List Iterator", "number": 341, "link": "https://leetcode.com/problems/flatten-nested-list-iterator/"},
  {"pattern": "Stacks", "problem": "Implement Queue Using Stacks", "number": 232, "link": "https://leetcode.com/problems/implement-queue-using-stacks/"},
  {"pattern": "Stacks", "problem": "Daily Temperatures", "number": 739, "link": "https://leetcode.com/problems/daily-temperatures/"},
  {"pattern": "Stacks", "problem": "Decode String", "number": 394, "link": "https://leetcode.com/problems/decode-string/"},
  {"pattern": "Stacks", "problem": "Minimum String Length After Removing Substrings", "number": 2696, "link": "https://leetcode.com/problems/minimum-string-length-after-removing-substrings/"},
  {"pattern": "Stacks", "problem": "Number of Valid Subarrays", "number": 1063, "link": "https://leetcode.com/problems/number-of-valid-subarrays/"},
  {"pattern": "Stacks", "problem": "Number of Visible People in a Queue", "number": 1944, "link": "https://leetcode.com/problems/number-of-visible-people-in-a-queue/"},
  {"pattern": "Stacks", "problem": "Parsing a Boolean Expression", "number": 1106, "link": "https://leetcode.com/problems/parsing-a-boolean-expression/"},
  {"pattern": "Stacks", "problem": "Remove Duplicate Letters", "number": 316, "link": "https://leetcode.com/problems/remove-duplicate-letters/"},
  {"pattern": "Stacks", "problem": "Valid Parentheses", "number": 20, "link": "https://leetcode.com/problems/valid-parentheses/"},
  {"pattern": "Stacks", "problem": "Longest Valid Parentheses", "number": 32, "link": "https://leetcode.com/problems/longest-valid-parentheses/description/"},
  {"pattern": "Stacks", "problem": "Maximum Width Ramp", "number": 962, "link": "https://leetcode.com/problems/maximum-width-ramp/description/"},
  {"pattern": "Stacks", "problem": "Next Greater Element I", "number": 496, "link": "https://leetcode.com/problems/next-greater-element-i/description/"},
  {"pattern": "Stacks", "problem": "Next Greater Element II", "number": 503, "link": "https://leetcode.com/problems/next-greater-element-ii/description/"},
  {"pattern": "Stacks", "problem": "Next Greater Element III", "number": 556, "link": "https://leetcode.com/problems/next-greater-element-iii/description/"},
  {"pattern": "Stacks", "problem": "Next Greater Element IV", "number": 2454, "link": "https://leetcode.com/problems/next-greater-element-iv/description/"},
  {"pattern": "Stacks", "problem": "Next Greater Elements", "number": null, "link": "Try it on LeetCode Playground"},
  {"pattern": "Stacks", "problem": "Next Smaller Elements", "number": null, "link": "Try it on LeetCode Playground"},
  {"pattern": "Stacks", "problem": "Prev Greater Elements", "number": null, "link": "Try it on LeetCode Playground"},
  {"pattern": "Stacks", "problem": "Prev Smaller Elements", "number": null, "link": "Try it on LeetCode Playground"},
  {"pattern": "Graphs", "problem": "Network Delay Time", "number": 743, "link": "https://leetcode.com/problems/network-delay-time/"},
  {"pattern": "Graphs", "problem": "Paths in Maze That Lead to Same Room", "number": 1971, "link": "https://leetcode.com/problems/find-if-path-exists-in-graph/"},
  {"pattern": "Graphs", "problem": "Clone Graph", "number": 133, "link": "https://leetcode.com/problems/clone-graph/"},
  {"pattern": "Graphs", "problem": "Graph Valid Tree", "number": 261, "link": "https://leetcode.com/problems/graph-valid-tree/"},
  {"pattern": "Graphs", "problem": "Bus Routes", "number": 815, "link": "https://leetcode.com/problems/bus-routes/"},
  {"pattern": "Graphs", "problem": "Reconstruct Itinerary", "number": 332, "link": "https://leetcode.com/problems/reconstruct-itinerary/"},
  {"pattern": "Graphs", "problem": "Find the Town Judge", "number": 997, "link": "https://leetcode.com/problems/find-the-town-judge/"},
  {"pattern": "Graphs", "problem": "Find Center of Star Graph", "number": 1791, "link": "https://leetcode.com/problems/find-center-of-star-graph/"},
  {"pattern": "Graphs", "problem": "Lucky Numbers in a Matrix", "number": 1380, "link": "https://leetcode.com/problems/lucky-numbers-in-a-matrix/"},
  {"pattern": "Graphs", "problem": "Path with Maximum Probability", "number": 1514, "link": "https://leetcode.com/problems/path-with-maximum-probability/"},
  {"pattern": "Graphs", "problem": "Tree Diameter", "number": 1245, "link": "https://leetcode.com/problems/tree-diameter/"},
  {"pattern": "Graphs", "problem": "Reorder Routes to Make All Paths Lead to the City Zero", "number": 1466, "link": "https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/"},
  {"pattern": "Graphs", "problem": "Minimum Cost to Make at Least One Valid Path in a Grid", "number": 1368, "link": "https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/"},
  {"pattern": "Graphs", "problem": "Longest Cycle in a Graph", "number": 2360, "link": "https://leetcode.com/problems/longest-cycle-in-a-graph/"},
  {"pattern": "Graphs", "problem": "Shortest Cycle in a Graph", "number": 2608, "link": "https://leetcode.com/problems/shortest-cycle-in-a-graph/"},
  {"pattern": "Tree Depth-First Search", "problem": "Flatten Binary Tree to Linked List", "number": 114, "link": "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/"},
  {"pattern": "Tree Depth-First Search", "problem": "Diameter of Binary Tree", "number": 543, "link": "https://leetcode.com/problems/diameter-of-binary-tree/"},
  {"pattern": "Tree Depth-First Search", "problem": "Serialize and Deserialize Binary Tree", "number": 297, "link": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/"},
  {"pattern": "Tree Depth-First Search", "problem": "Invert Binary Tree", "number": 226, "link": "https://leetcode.com/problems/invert-binary-tree/"},
  {"pattern": "Tree Depth-First Search", "problem": "Binary Tree Maximum Path Sum", "number": 124, "link": "https://leetcode.com/problems/binary-tree-maximum-path-sum/"},
  {"pattern": "Tree Depth-First Search", "problem": "Convert Sorted Array to Binary Search Tree", "number": 108, "link": "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/"},
  {"pattern": "Tree Depth-First Search", "problem": "Build Binary Tree from Preorder and Inorder Traversal", "number": 105, "link": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/"},
  {"pattern": "Tree Depth-First Search", "problem": "Binary Tree Right Side View", "number": 199, "link": "https://leetcode.com/problems/binary-tree-right-side-view/"},
  {"pattern": "Tree Depth-First Search", "problem": "Lowest Common Ancestor of a Binary Tree", "number": 236, "link": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/"},
  {"pattern": "Tree Depth-First Search", "problem": "Validate Binary Search Tree", "number": 98, "link": "https://leetcode.com/problems/validate-binary-search-tree/"},
  {"pattern": "Tree Depth-First Search", "problem": "Nested List Weight Sum II", "number": 364, "link": "https://leetcode.com/problems/nested-list-weight-sum-ii/"},
  {"pattern": "Tree Depth-First Search", "problem": "Inorder Successor in BST", "number": 285, "link": "https://leetcode.com/problems/inorder-successor-in-bst/"},
  {"pattern": "Tree Depth-First Search", "problem": "Height of Binary Tree After Subtree Removal Queries", "number": 2458, "link": "https://leetcode.com/problems/height-of-binary-tree-after-subtree-removal-queries/"},
  {"pattern": "Tree Depth-First Search", "problem": "Delete Nodes And Return Forest", "number": 1110, "link": "https://leetcode.com/problems/delete-nodes-and-return-forest/"},
  {"pattern": "Tree Depth-First Search", "problem": "Sum of Distances in a Tree", "number": 834, "link": "https://leetcode.com/problems/sum-of-distances-in-tree/"},
  {"pattern": "Tree Depth-First Search", "problem": "Recover a Tree From Preorder Traversal", "number": 1028, "link": "https://leetcode.com/problems/recover-a-tree-from-preorder-traversal/"},
  {"pattern": "Tree Depth-First Search", "problem": "Maximum Depth of Binary Tree", "number": 104, "link": "https://leetcode.com/problems/maximum-depth-of-binary-tree/"},
  {"pattern": "Tree Depth-First Search", "problem": "Kth Smallest Element in a BST", "number": 230, "link": "https://leetcode.com/problems/kth-smallest-element-in-a-bst/"},
  {"pattern": "Tree Breadth-First Search", "problem": "Binary Tree Level Order Traversal", "number": 102, "link": "https://leetcode.com/problems/binary-tree-level-order-traversal/"},
  {"pattern": "Tree Breadth-First Search", "problem": "Binary Tree Zigzag Level Order Traversal", "number": 103, "link": "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/"},
  {"pattern": "Tree Breadth-First Search", "problem": "Populating Next Right Pointers in Each Node", "number": 116, "link": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/"},
  {"pattern": "Tree Breadth-First Search", "problem": "Vertical Order Traversal of a Binary Tree", "number": 987, "link": "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/"},
  {"pattern": "Tree Breadth-First Search", "problem": "Symmetric Tree", "number": 101, "link": "https://leetcode.com/problems/symmetric-tree/"},
  {"pattern": "Tree Breadth-First Search", "problem": "Word Ladder", "number": 127, "link": "https://leetcode.com/problems/word-ladder/"},
  {"pattern": "Tree Breadth-First Search", "problem": "Two Sum IV - Input Is a BST", "number": 653, "link": "https://leetcode.com/problems/two-sum-iv-input-is-a-bst/"},
  {"pattern": "Tree Breadth-First Search", "problem": "Find Minimum Diameter After Merging Two Trees", "number": 3203, "link": "https://leetcode.com/problems/find-minimum-diameter-after-merging-two-trees/"},
  {"pattern": "Tree Breadth-First Search", "problem": "Closest Node to Path in Tree", "number": 3169, "link": "https://leetcode.com/problems/closest-node-to-path-in-tree/"},
  {"pattern": "Tree Breadth-First Search", "problem": "Frog Position After T Seconds", "number": 1377, "link": "https://leetcode.com/problems/frog-position-after-t-seconds/"},
  {"pattern": "Tree Breadth-First Search", "problem": "Average of Levels in Binary Tree", "number": 637, "link": "https://leetcode.com/problems/average-of-levels-in-binary-tree/"},
  {"pattern": "Tree Breadth-First Search", "problem": "Connect All Siblings of a Binary Tree (Similar to 117 - Populating Next Right Pointers in Each Node II)", "number": null, "link": "https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/"},
  {"pattern": "Trie", "problem": "Implement Trie (Prefix Tree)", "number": 208, "link": "https://leetcode.com/problems/implement-trie-prefix-tree/"},
  {"pattern": "Trie", "problem": "Search Suggestions System", "number": 1268, "link": "https://leetcode.com/problems/search-suggestions-system/description/"},
  {"pattern": "Trie", "problem": "Replace Words", "number": 648, "link": "https://leetcode.com/problems/replace-words/description/"},
  {"pattern": "Trie", "problem": "Design Add and Search Words Data Structure", "number": 211, "link": "https://leetcode.com/problems/design-add-and-search-words-data-structure/description/"},
  {"pattern": "Trie", "problem": "Word Search II", "number": 212, "link": "https://leetcode.com/problems/word-search-ii/description/"},
  {"pattern": "Trie", "problem": "Top K Frequent Words", "number": 692, "link": "https://leetcode.com/problems/top-k-frequent-words/description/"},
  {"pattern": "Trie", "problem": "Longest Common Prefix", "number": 14, "link": "https://leetcode.com/problems/longest-common-prefix/description/"},
  {"pattern": "Trie", "problem": "Index Pairs of a String", "number": 1065, "link": "https://leetcode.com/problems/index-pairs-of-a-string/description/"},
  {"pattern": "Trie", "problem": "K-th Smallest in Lexicographical Order", "number": 440, "link": "https://leetcode.com/problems/k-th-smallest-in-lexicographical-order/description/"},
  {"pattern": "Trie", "problem": "Palindrome Pairs", "number": 336, "link": "https://leetcode.com/problems/palindrome-pairs/description/"},
  {"pattern": "Trie", "problem": "Longest Common Suffix Queries", "number": 3093, "link": "https://leetcode.com/problems/longest-common-suffix-queries/description/"},
  {"pattern": "Trie", "problem": "Map Sum Pairs", "number": 677, "link": "https://leetcode.com/problems/map-sum-pairs/description/"},
  {"pattern": "Trie", "problem": "Check If a Word Occurs As a Prefix of Any Word in a Sentence", "number": 1455, "link": "https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/description/"},
  {"pattern": "Trie", "problem": "Longest Word With All Prefixes", "number": 1858, "link": "https://leetcode.com/problems/longest-word-with-all-prefixes/description/"},
  {"pattern": "Trie", "problem": "Lexicographical Numbers", "number": 386, "link": "https://leetcode.com/problems/lexicographical-numbers/description/"},
  {"pattern": "HashMaps", "problem": "Design HashMap", "number": 706, "link": "https://leetcode.com/problems/design-hashmap/description/"},
  {"pattern": "HashMaps", "problem": "Fraction to Recurring Decimal", "number": 166, "link": "https://leetcode.com/problems/fraction-to-recurring-decimal/description/"},
  {"pattern": "HashMaps", "problem": "Logger Rate Limiter", "number": 359, "link": "https://leetcode.com/problems/logger-rate-limiter/description/"},
  {"pattern": "HashMaps", "problem": "Next Greater Element I", "number": 496, "link": "https://leetcode.com/problems/next-greater-element-i/description/"},
  {"pattern": "HashMaps", "problem": "Isomorphic Strings", "number": 205, "link": "https://leetcode.com/problems/isomorphic-strings/description/"},
  {"pattern": "HashMaps", "problem": "Find Duplicate File in System", "number": 609, "link": "https://leetcode.com/problems/find-duplicate-file-in-system/description/"},
  {"pattern": "HashMaps", "problem": "High Five", "number": 1086, "link": "https://leetcode.com/problems/high-five/description/"},
  {"pattern": "HashMaps", "problem": "Bulls and Cows", "number": 299, "link": "https://leetcode.com/problems/bulls-and-cows/description/"},
  {"pattern": "HashMaps", "problem": "Custom Sort String", "number": 791, "link": "https://leetcode.com/problems/custom-sort-string/description/"},
  {"pattern": "HashMaps", "problem": "Number of Distinct Islands", "number": 694, "link": "https://leetcode.com/problems/number-of-distinct-islands/description/"},
  {"pattern": "HashMaps", "problem": "Number of Wonderful Substrings", "number": 1915, "link": "https://leetcode.com/problems/number-of-wonderful-substrings/description/"},
  {"pattern": "HashMaps", "problem": "Total Appeal of A String", "number": 2262, "link": "https://leetcode.com/problems/total-appeal-of-a-string/description/"},
  {"pattern": "HashMaps", "problem": "Continuous Subarray Sum", "number": 523, "link": "https://leetcode.com/problems/continuous-subarray-sum/description/"},
  {"pattern": "HashMaps", "problem": "Unique Number of Occurrences", "number": 1207, "link": "https://leetcode.com/problems/unique-number-of-occurrences/description/"},
  {"pattern": "HashMaps", "problem": "Longest Happy Prefix", "number": 1392, "link": "https://leetcode.com/problems/longest-happy-prefix/description/"},
  {"pattern": "HashMaps", "problem": "Find Longest Self-Contained Substring", "number": 3104, "link": "https://leetcode.com/problems/find-longest-self-contained-substring/description/"},
  {"pattern": "HashMaps", "problem": "Intersection of Two Arrays", "number": 349, "link": "https://leetcode.com/problems/intersection-of-two-arrays/description/"},
  {"pattern": "HashMaps", "problem": "Word Pattern", "number": 290, "link": "https://leetcode.com/problems/word-pattern/description/"},
  {"pattern": "HashMaps", "problem": "Longest Palindrome", "number": 409, "link": "https://leetcode.com/problems/longest-palindrome/description/"},
  {"pattern": "Union Find", "problem": "Redundant Connection", "number": 684, "link": "https://leetcode.com/problems/redundant-connection/"},
  {"pattern": "Union Find", "problem": "Number of Islands", "number": 200, "link": "https://leetcode.com/problems/number-of-islands/"},
  {"pattern": "Union Find", "problem": "Most Stones Removed with Same Row or Column", "number": 947, "link": "https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/"},
  {"pattern": "Union Find", "problem": "Longest Consecutive Sequence", "number": 128, "link": "https://leetcode.com/problems/longest-consecutive-sequence/"},
  {"pattern": "Union Find", "problem": "Last Day Where You Can Still Cross", "number": 1970, "link": "https://leetcode.com/problems/last-day-where-you-can-still-cross/"},
  {"pattern": "Union Find", "problem": "Regions Cut by Slashes", "number": 959, "link": "https://leetcode.com/problems/regions-cut-by-slashes/"},
  {"pattern": "Union Find", "problem": "Accounts Merge", "number": 721, "link": "https://leetcode.com/problems/accounts-merge/"},
  {"pattern": "Union Find", "problem": "Minimize Malware Spread", "number": 924, "link": "https://leetcode.com/problems/minimize-malware-spread/"},
  {"pattern": "Union Find", "problem": "Find if Path Exists in Graph", "number": 1971, "link": "https://leetcode.com/problems/find-if-path-exists-in-graph/"},
  {"pattern": "Union Find", "problem": "The Skyline Problem", "number": 218, "link": "https://leetcode.com/problems/the-skyline-problem/"},
  {"pattern": "Union Find", "problem": "Similar String Groups", "number": 839, "link": "https://leetcode.com/problems/similar-string-groups/"},
  {"pattern": "Union Find", "problem": "Optimize Water Distribution in a Village", "number": 1168, "link": "https://leetcode.com/problems/optimize-water-distribution-in-a-village/"},
  {"pattern": "Union Find", "problem": "Number of Islands II", "number": 305, "link": "https://leetcode.com/problems/number-of-islands-ii/"},
  {"pattern": "Union Find", "problem": "Evaluate Division", "number": 399, "link": "https://leetcode.com/problems/evaluate-division/"},
  {"pattern": "Custom Data Structures", "problem": "Snapshot Array", "number": 1146, "link": "https://leetcode.com/problems/snapshot-array/"},
  {"pattern": "Custom Data Structures", "problem": "Time Based Key-Value Store", "number": 981, "link": "https://leetcode.com/problems/time-based-key-value-store/"},
  {"pattern": "Custom Data Structures", "problem": "LRU Cache", "number": 146, "link": "https://leetcode.com/problems/lru-cache/"},
  {"pattern": "Custom Data Structures", "problem": "Insert Delete GetRandom O(1)", "number": 380, "link": "https://leetcode.com/problems/insert-delete-getrandom-o1/"},
  {"pattern": "Custom Data Structures", "problem": "Min Stack", "number": 155, "link": "https://leetcode.com/problems/min-stack/"},
  {"pattern": "Custom Data Structures", "problem": "Range Module", "number": 715, "link": "https://leetcode.com/problems/range-module/"},
  {"pattern": "Custom Data Structures", "problem": "Shortest Word Distance II", "number": 244, "link": "https://leetcode.com/problems/shortest-word-distance-ii/"},
  {"pattern": "Custom Data Structures", "problem": "Design HashSet", "number": 705, "link": "https://leetcode.com/problems/design-hashset/"},
  {"pattern": "Custom Data Structures", "problem": "Max Stack", "number": 716, "link": "https://leetcode.com/problems/max-stack/"},
  {"pattern": "Custom Data Structures", "problem": "Moving Average from Data Stream", "number": 346, "link": "https://leetcode.com/problems/moving-average-from-data-stream/"},
  {"pattern": "Custom Data Structures", "problem": "Two Sum III - Data structure design", "number": 170, "link": "https://leetcode.com/problems/two-sum-iii-data-structure-design/"},
  {"pattern": "Custom Data Structures", "problem": "Range Sum Query - Immutable", "number": 303, "link": "https://leetcode.com/problems/range-sum-query-immutable/"},
  {"pattern": "Custom Data Structures", "problem": "Stream of Characters", "number": 1032, "link": "https://leetcode.com/problems/stream-of-characters/"},
  {"pattern": "Custom Data Structures", "problem": "All O`one Data Structure", "number": 432, "link": "https://leetcode.com/problems/all-oone-data-structure/"},
  {"pattern": "Custom Data Structures", "problem": "Finding MK Average", "number": 1825, "link": "https://leetcode.com/problems/finding-mk-average/"},
  {"pattern": "Custom Data Structures", "problem": "LFU Cache", "number": 460, "link": "https://leetcode.com/problems/lfu-cache/"},
  {"pattern": "Bitwise Manipulation", "problem": "Find the Difference", "number": 389, "link": "https://leetcode.com/problems/find-the-difference/"},
  {"pattern": "Bitwise Manipulation", "problem": "Complement of Base 10 Integer", "number": 1009, "link": "https://leetcode.com/problems/complement-of-base-10-integer/"},
  {"pattern": "Bitwise Manipulation", "problem": "Flipping an Image", "number": 832, "link": "https://leetcode.com/problems/flipping-an-image/"},
  {"pattern": "Bitwise Manipulation", "problem": "Single Number", "number": 136, "link": "https://leetcode.com/problems/single-number/"},
  {"pattern": "Bitwise Manipulation", "problem": "Single Number II", "number": 137, "link": "https://leetcode.com/problems/single-number-ii/"},
  {"pattern": "Bitwise Manipulation", "problem": "Encode and Decode Strings", "number": 271, "link": "https://leetcode.com/problems/encode-and-decode-strings/"},
  {"pattern": "Bitwise Manipulation", "problem": "Sum of All Subset XOR Totals", "number": 1863, "link": "https://leetcode.com/problems/sum-of-all-subset-xor-totals/"},
  {"pattern": "Bitwise Manipulation", "problem": "Find The K-th Lucky Number", "number": 1922, "link": "https://leetcode.com/problems/count-good-numbers/ (closest equivalent, as the original is not on LeetCode)"},
  {"pattern": "Bitwise Manipulation", "problem": "Minimum Number of K Consecutive Bit Flips", "number": 995, "link": "https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/"},
  {"pattern": "Bitwise Manipulation", "problem": "Find the Longest Substring Having Vowels in Even Counts", "number": 1371, "link": "https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/"},
  {"pattern": "Bitwise Manipulation", "problem": "Count Triplets That Can Form Two Arrays of Equal XOR", "number": 1442, "link": "https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/"},
  {"pattern": "Bitwise Manipulation", "problem": "Longest Subarray With Maximum Bitwise AND", "number": 2419, "link": "https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/"},
  {"pattern": "Bitwise Manipulation", "problem": "Minimum One Bit Operations to Make Integers Zero", "number": 1611, "link": "https://leetcode.com/problems/minimum-one-bit-operations-to-make-integers-zero/"},
  {"pattern": "Bitwise Manipulation", "problem": "Triples with Bitwise AND Equal To Zero", "number": 982, "link": "https://leetcode.com/problems/triples-with-bitwise-and-equal-to-zero/"},
  {"pattern": "Bitwise Manipulation", "problem": "Power of Two", "number": 231, "link": "https://leetcode.com/problems/power-of-two/"},
  {"pattern": "Bitwise Manipulation", "problem": "Reverse Bits", "number": 190, "link": "https://leetcode.com/problems/reverse-bits/"},
  {"pattern": "Math & Geometry", "problem": "Check If It Is a Straight Line", "number": 1232, "link": "https://leetcode.com/problems/check-if-it-is-a-straight-line/description/"},
  {"pattern": "Math & Geometry", "problem": "Minimum Cuts to Divide a Circle", "number": 2481, "link": "https://leetcode.com/problems/minimum-cuts-to-divide-a-circle/description/"},
  {"pattern": "Math & Geometry", "problem": "Rectangle Overlap", "number": 836, "link": "https://leetcode.com/problems/rectangle-overlap/description/"},
  {"pattern": "Math & Geometry", "problem": "Minimum Time Visiting All Points", "number": 1266, "link": "https://leetcode.com/problems/minimum-time-visiting-all-points/description/"},
  {"pattern": "Math & Geometry", "problem": "Reverse Integer", "number": 7, "link": "https://leetcode.com/problems/reverse-integer/description/"},
  {"pattern": "Math & Geometry", "problem": "Valid Square", "number": 593, "link": "https://leetcode.com/problems/valid-square/description/"},
  {"pattern": "Math & Geometry", "problem": "Rectangle Area", "number": 223, "link": "https://leetcode.com/problems/rectangle-area/description/"},
  {"pattern": "Math & Geometry", "problem": "Minimum Area Rectangle", "number": 939, "link": "https://leetcode.com/problems/minimum-area-rectangle/description/"},
  {"pattern": "Math & Geometry", "problem": "Maximum Area Rectangle With Point Constraints I", "number": 3380, "link": "https://leetcode.com/problems/maximum-area-rectangle-with-point-constraints-i/description/"},
  {"pattern": "Math & Geometry", "problem": "Convex Polygon", "number": 469, "link": "https://leetcode.com/problems/convex-polygon/description/"},
  {"pattern": "Math & Geometry", "problem": "Queries on Number of Points Inside a Circle", "number": 1828, "link": "https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/description/"},
  {"pattern": "Math & Geometry", "problem": "Max Points on a Line", "number": 149, "link": "https://leetcode.com/problems/max-points-on-a-line/description/"},
  {"pattern": "Math & Geometry", "problem": "Maximum Number of Visible Points", "number": 1610, "link": "https://leetcode.com/problems/maximum-number-of-visible-points/description/"},
  {"pattern": "Math & Geometry", "problem": "Minimize Manhattan Distances", "number": 3102, "link": "https://leetcode.com/problems/minimize-manhattan-distances/description/"},
  {"pattern": "Math & Geometry", "problem": "Self Crossing", "number": 335, "link": "https://leetcode.com/problems/self-crossing/description/"},
  {"pattern": "Math & Geometry", "problem": "Erect the Fence", "number": 587, "link": "https://leetcode.com/problems/erect-the-fence/description/"},
  {"pattern": "Math & Geometry", "problem": "Minimum Number of Lines to Cover Points", "number": 2152, "link": "https://leetcode.com/problems/minimum-number-of-lines-to-cover-points/description/"},
  {"pattern": "Math & Geometry", "problem": "Nth Magical Number", "number": 878, "link": "https://leetcode.com/problems/nth-magical-number/description/"},
  {"pattern": "Math & Geometry", "problem": "Detonate the Maximum Bombs", "number": 2101, "link": "https://leetcode.com/problems/detonate-the-maximum-bombs/description/"},
  {"pattern": "Extra Problems", "problem": "Shortest Bridge", "number": 934, "link": "https://leetcode.com/problems/shortest-bridge/"},
  {"pattern": "Extra Problems", "problem": "Number of Connected Components in an Undirected Graph", "number": 323, "link": "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/"},
  {"pattern": "Extra Problems", "problem": "Median of Two Sorted Arrays", "number": 4, "link": "https://leetcode.com/problems/median-of-two-sorted-arrays/"},
  {"pattern": "Extra Problems", "problem": "Pacific Atlantic Water Flow", "number": 417, "link": "https://leetcode.com/problems/pacific-atlantic-water-flow/"},
  {"pattern": "Extra Problems", "problem": "Contains Duplicate", "number": 217, "link": "https://leetcode.com/problems/contains-duplicate/"},
  {"pattern": "Extra Problems", "problem": "Maximum Subarray", "number": 53, "link": "https://leetcode.com/problems/maximum-subarray/"},
  {"pattern": "Extra Problems", "problem": "Two Sum", "number": 1, "link": "https://leetcode.com/problems/two-sum/"},
  {"pattern": "Extra Problems", "problem": "Find Minimum in Rotated Sorted Array", "number": 153, "link": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/"},
  {"pattern": "Extra Problems", "problem": "Non-overlapping Intervals", "number": 435, "link": "https://leetcode.com/problems/non-overlapping-intervals/"},
  {"pattern": "Extra Problems", "problem": "Meeting Rooms", "number": 252, "link": "https://leetcode.com/problems/meeting-rooms/"},
  {"pattern": "Extra Problems", "problem": "Largest Rectangle in Histogram", "number": 84, "link": "https://leetcode.com/problems/largest-rectangle-in-histogram/"},
  {"pattern": "Extra Problems", "problem": "Subtree of Another Tree", "number": 572, "link": "https://leetcode.com/problems/subtree-of-another-tree/"},
  {"pattern": "Extra Problems", "problem": "Sort List", "number": 148, "link": "https://leetcode.com/problems/sort-list/"},
  {"pattern": "Extra Problems", "problem": "Number of 1 Bits", "number": 191, "link": "https://leetcode.com/problems/number-of-1-bits/"},
  {"pattern": "Extra Problems", "problem": "Container with Most Water", "number": 11, "link": "https://leetcode.com/problems/container-with-most-water/"},
  {"pattern": "Extra Problems", "problem": "Evaluate Reverse Polish Notation", "number": 150, "link": "https://leetcode.com/problems/evaluate-reverse-polish-notation/"},
  {"pattern": "Extra Problems", "problem": "4Sum", "number": 18, "link": "https://leetcode.com/problems/4sum/"},
  {"pattern": "Extra Problems", "problem": "Loud and Rich", "number": 851, "link": "https://leetcode.com/problems/loud-and-rich/"},
  {"pattern": "Extra Problems", "problem": "Product of Array Except Self", "number": 238, "link": "https://leetcode.com/problems/product-of-array-except-self/"},
  {"pattern": "Extra Problems", "problem": "Longest Increasing Subsequence", "number": 300, "link": "https://leetcode.com/problems/longest-increasing-subsequence/"},
  {"pattern": "Extra Problems", "problem": "Sum of Two Integers", "number": 371, "link": "https://leetcode.com/problems/sum-of-two-integers/"},
  {"pattern": "Extra Problems", "problem": "Majority Element", "number": 169, "link": "https://leetcode.com/problems/majority-element/"},
  {"pattern": "Extra Problems", "problem": "Unique Paths", "number": 62, "link": "https://leetcode.com/problems/unique-paths/"},
  {"pattern": "Extra Problems", "problem": "Longest Palindromic Substring", "number": 5, "link": "https://leetcode.com/problems/longest-palindromic-substring/"},
  {"pattern": "Extra Problems", "problem": "Permutations II", "number": 47, "link": "https://leetcode.com/problems/permutations-ii/"},
  {"pattern": "Extra Problems", "problem": "Number of Provinces", "number": 547, "link": "https://leetcode.com/problems/number-of-provinces/"},
  {"pattern": "Extra Problems", "problem": "Linked List Cycle II", "number": 142, "link": "https://leetcode.com/problems/linked-list-cycle-ii/"},
  {"pattern": "Extra Problems", "problem": "Minimum Flips to Make the Binary String Alternate", "number": 1888, "link": "https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/"},
  {"pattern": "Extra Problems", "problem": "Lemonade Change", "number": 860, "link": "https://leetcode.com/problems/lemonade-change/"},
  {"pattern": "Extra Problems", "problem": "House Robber", "number": 198, "link": "https://leetcode.com/problems/house-robber/"},
  {"pattern": "Extra Problems", "problem": "Find All Numbers Disappeared in an Array", "number": 448, "link": "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/"},
  {"pattern": "Extra Problems", "problem": "Same Tree", "number": 100, "link": "https://leetcode.com/problems/same-tree/"},
  {"pattern": "Extra Problems", "problem": "Find All Duplicates in an Array", "number": 442, "link": "https://leetcode.com/problems/find-all-duplicates-in-an-array/"},
  {"pattern": "Extra Problems", "problem": "Design In-Memory File System", "number": 588, "link": "https://leetcode.com/problems/design-in-memory-file-system/"},
  {"pattern": "Extra Problems", "problem": "Design File System", "number": 1166, "link": "https://leetcode.com/problems/design-file-system/"},
  {"pattern": "Extra Problems", "problem": "Asteroid Collision", "number": 735, "link": "https://leetcode.com/problems/asteroid-collision/"},
  {"pattern": "Extra Problems", "problem": "Rotting Oranges", "number": 994, "link": "https://leetcode.com/problems/rotting-oranges/"},
  {"pattern": "Extra Problems", "problem": "Add Binary", "number": 67, "link": "https://leetcode.com/problems/add-binary/"},
  {"pattern": "Extra Problems", "problem": "Multiply Strings", "number": 43, "link": "https://leetcode.com/problems/multiply-strings/"},
  {"pattern": "Extra Problems", "problem": "Third Maximum Number", "number": 414, "link": "https://leetcode.com/problems/third-maximum-number/"},
  {"pattern": "Extra Problems", "problem": "Sort Array By Parity II", "number": 922, "link": "https://leetcode.com/problems/sort-array-by-parity-ii/"},
  {"pattern": "Extra Problems", "problem": "Sort Array By Parity", "number": 905, "link": "https://leetcode.com/problems/sort-array-by-parity/description/"},
  {"pattern": "Segment Trees", "problem": "Range Sum Query - Immutable", "number": 303, "link": "https://leetcode.com/problems/range-sum-query-immutable/description/"},
  {"pattern": "Segment Trees", "problem": "Range Sum Query - Mutable", "number": 307, "link": "https://leetcode.com/problems/range-sum-query-mutable/description/"},
  {"pattern": "Segment Trees", "problem": "Range Addition", "number": 370, "link": "https://leetcode.com/problems/range-addition/description/"},
  {"pattern": "Segment Trees", "problem": "Car Pooling", "number": 1094, "link": "https://leetcode.com/problems/car-pooling/description/"},
  {"pattern": "Segment Trees", "problem": "Falling Squares", "number": 699, "link": "https://leetcode.com/problems/falling-squares/description/"},
  {"pattern": "Segment Trees", "problem": "My Calendar III", "number": 732, "link": "https://leetcode.com/problems/my-calendar-iii/description/"},
  {"pattern": "Segment Trees", "problem": "Maximum Sum Queries", "number": 2736, "link": "https://leetcode.com/problems/maximum-sum-queries/description/"},
  {"pattern": "Segment Trees", "problem": "Range Sum Query 2D - Mutable", "number": 308, "link": "https://leetcode.com/problems/range-sum-query-2d-mutable/description/"},
  {"pattern": "Segment Trees", "problem": "Count of Range Sum", "number": 327, "link": "https://leetcode.com/problems/count-of-range-sum/description/"},
  {"pattern": "Segment Trees", "problem": "Range Frequency Queries", "number": 2080, "link": "https://leetcode.com/problems/range-frequency-queries/description/"},
  {"pattern": "Segment Trees", "problem": "Longest Increasing Subsequence II", "number": 2407, "link": "https://leetcode.com/problems/longest-increasing-subsequence-ii/description/"},
  {"pattern": "Prefix Sum", "problem": "Running Sum of 1d Array", "number": 1480, "link": "https://leetcode.com/problems/running-sum-of-1d-array/"},
  {"pattern": "Prefix Sum", "problem": "Range Sum Query - Immutable", "number": 303, "link": "https://leetcode.com/problems/range-sum-query-immutable/"},
  {"pattern": "Prefix Sum", "problem": "Subarray Sum Equals K", "number": 560, "link": "https://leetcode.com/problems/subarray-sum-equals-k/"},
  {"pattern": "Prefix Sum", "problem": "XOR Queries of a Subarray", "number": 1310, "link": "https://leetcode.com/problems/xor-queries-of-a-subarray/"},
  {"pattern": "Prefix Sum", "problem": "Count Vowel Strings in Ranges", "number": 2559, "link": "https://leetcode.com/problems/count-vowel-strings-in-ranges/"},
  {"pattern": "Prefix Sum", "problem": "Maximum Size Subarray Sum Equals k", "number": 325, "link": "https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/"},
  {"pattern": "Prefix Sum", "problem": "Count Number of Nice Subarrays", "number": 1248, "link": "https://leetcode.com/problems/count-number-of-nice-subarrays/"},
  {"pattern": "Prefix Sum", "problem": "Binary Subarrays With Sum", "number": 930, "link": "https://leetcode.com/problems/binary-subarrays-with-sum/"},
  {"pattern": "Prefix Sum", "problem": "Count Number of Bad Pairs", "number": 2364, "link": "https://leetcode.com/problems/count-number-of-bad-pairs/"},
  {"pattern": "Prefix Sum", "problem": "Minimum Operations to Reduce X to Zero", "number": 1658, "link": "https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/"},
  {"pattern": "Prefix Sum", "problem": "Subarray Sums Divisible by K", "number": 974, "link": "https://leetcode.com/problems/subarray-sums-divisible-by-k/"},
  {"pattern": "Prefix Sum", "problem": "Check If Array Pairs Are Divisible by k", "number": 1497, "link": "https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/"},
  {"pattern": "Prefix Sum", "problem": "Make Sum Divisible by P", "number": 1590, "link": "https://leetcode.com/problems/make-sum-divisible-by-p/"},
  {"pattern": "Prefix Sum", "problem": "Continuous Subarray Sum", "number": 523, "link": "https://leetcode.com/problems/continuous-subarray-sum/"},
  {"pattern": "Prefix Sum", "problem": "Find the Divisibility Array of a String", "number": 2575, "link": "https://leetcode.com/problems/find-the-divisibility-array-of-a-string/"},
  {"pattern": "Prefix Sum", "problem": "Count of Interesting Subarrays", "number": 2845, "link": "https://leetcode.com/problems/count-of-interesting-subarrays/"},
  {"pattern": "Prefix Sum", "problem": "Count Triplets That Can Form Two Arrays of Equal XOR", "number": 1442, "link": "https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/"},
  {"pattern": "Prefix Sum", "problem": "Number of Wonderful Substrings", "number": 1915, "link": "https://leetcode.com/problems/number-of-wonderful-substrings/"},
  {"pattern": "Prefix Sum", "problem": "Find Longest Awesome Substring", "number": 1542, "link": "https://leetcode.com/problems/find-longest-awesome-substring/"},
  {"pattern": "Prefix Sum", "problem": "Find the Longest Substring Containing Vowels in Even Counts", "number": 1371, "link": "https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/"},
  {"pattern": "Prefix Sum", "problem": "Range Sum Query 2D - Immutable", "number": 304, "link": "https://leetcode.com/problems/range-sum-query-2d-immutable/"},
  {"pattern": "Prefix Sum", "problem": "Matrix Block Sum", "number": 1314, "link": "https://leetcode.com/problems/matrix-block-sum/"},
  {"pattern": "Prefix Sum", "problem": "Stamping the Grid", "number": 2132, "link": "https://leetcode.com/problems/stamping-the-grid/"},
  {"pattern": "Prefix Sum", "problem": "Maximal Square", "number": 221, "link": "https://leetcode.com/problems/maximal-square/"},
  {"pattern": "Prefix Sum", "problem": "Count Artifacts That Can Be Extracted", "number": 2201, "link": "https://leetcode.com/problems/count-artifacts-that-can-be-extracted/"},
  {"pattern": "Prefix Sum", "problem": "Maximum Difference Score in a Grid", "number": 3148, "link": "https://leetcode.com/problems/maximum-difference-score-in-a-grid/"},
  {"pattern": "Prefix Sum", "problem": "Grid Game", "number": 2017, "link": "https://leetcode.com/problems/grid-game/"}
];


// Video watched at the start of each pattern (Day 1 of its pair)
const DSA_PATTERN_VIDEO_TASK = (patternName) =>
  `Watch "${patternName}" pattern overview video, then start problems below.`;

/* =============================================================================
 * 2. Java + Spring Boot — generic recurring daily task, ~72 hrs total
 * ============================================================================= */
const JAVA_SPRING_TOTAL_HOURS = 72;
const JAVA_SPRING_HOURS_PER_DAY = 1.2;
const JAVA_SPRING_GENERIC_TASK = {
  title: "Java + Spring Boot videos",
  description:
    "Watch 5–10 Java/Spring Boot interview-prep videos (~1.2 hrs). Continue sequentially from where you left off — recommended order: Code Decode → Java Techie → Java Guides.",
};

/* =============================================================================
 * 3. SQL — generic recurring daily task, ~64 hrs total
 * ============================================================================= */
const SQL_TOTAL_HOURS = 64;
const SQL_HOURS_PER_DAY = 1;
const SQL_GENERIC_TASK = {
  title: "SQL practice/videos",
  description:
    "~1 hr of SQL interview prep. Continue sequentially through your chosen playlist/course from where you left off.",
};

/* =============================================================================
 * 4. System Design — generic recurring daily task, ~45 hrs total
 * ============================================================================= */
const SYSTEM_DESIGN_TOTAL_HOURS = 45;
const SYSTEM_DESIGN_HOURS_PER_DAY = 1;
const SYSTEM_DESIGN_GENERIC_TASK = {
  title: "System Design study",
  description:
    "~1 hr of System Design content. Continue sequentially from where you left off.",
};

/* =============================================================================
 * 5. Design Patterns — 60 total (30 HLD + 30 LLD/GoF), 1 per day
 * Edit this array directly to reorder or replace with your own list.
 * ============================================================================= */
const DESIGN_PATTERNS = [
  // --- High-Level / System Design patterns (Days 1-30 by default) ---
  { name: "Load Balancing", type: "High-Level" },
  { name: "Caching Strategies", type: "High-Level" },
  { name: "Database Sharding", type: "High-Level" },
  { name: "Database Replication", type: "High-Level" },
  { name: "CQRS", type: "High-Level" },
  { name: "Event Sourcing", type: "High-Level" },
  { name: "API Gateway", type: "High-Level" },
  { name: "Rate Limiting", type: "High-Level" },
  { name: "Circuit Breaker", type: "High-Level" },
  { name: "Message Queues (Pub/Sub)", type: "High-Level" },
  { name: "Content Delivery Networks (CDN)", type: "High-Level" },
  { name: "Consistent Hashing", type: "High-Level" },
  { name: "Leader Election", type: "High-Level" },
  { name: "Data Partitioning", type: "High-Level" },
  { name: "Microservices Decomposition", type: "High-Level" },
  { name: "Saga Pattern", type: "High-Level" },
  { name: "Strangler Fig Pattern", type: "High-Level" },
  { name: "Bulkhead Pattern", type: "High-Level" },
  { name: "Sidecar Pattern", type: "High-Level" },
  { name: "Service Discovery", type: "High-Level" },
  { name: "Write-Ahead Log", type: "High-Level" },
  { name: "Read Replica / CQRS Read Models", type: "High-Level" },
  { name: "Idempotency Keys", type: "High-Level" },
  { name: "Backpressure", type: "High-Level" },
  { name: "Multi-Region Active-Active", type: "High-Level" },
  { name: "Blue-Green Deployment", type: "High-Level" },
  { name: "Canary Releases", type: "High-Level" },
  { name: "Feature Flags", type: "High-Level" },
  { name: "Distributed Locking", type: "High-Level" },
  { name: "CAP Theorem Trade-offs", type: "High-Level" },

  // --- Low-Level / GoF patterns (Days 31-60 by default) ---
  { name: "Singleton", type: "Low-Level (GoF)" },
  { name: "Factory Method", type: "Low-Level (GoF)" },
  { name: "Abstract Factory", type: "Low-Level (GoF)" },
  { name: "Builder", type: "Low-Level (GoF)" },
  { name: "Prototype", type: "Low-Level (GoF)" },
  { name: "Adapter", type: "Low-Level (GoF)" },
  { name: "Bridge", type: "Low-Level (GoF)" },
  { name: "Composite", type: "Low-Level (GoF)" },
  { name: "Decorator", type: "Low-Level (GoF)" },
  { name: "Facade", type: "Low-Level (GoF)" },
  { name: "Flyweight", type: "Low-Level (GoF)" },
  { name: "Proxy", type: "Low-Level (GoF)" },
  { name: "Chain of Responsibility", type: "Low-Level (GoF)" },
  { name: "Command", type: "Low-Level (GoF)" },
  { name: "Interpreter", type: "Low-Level (GoF)" },
  { name: "Iterator", type: "Low-Level (GoF)" },
  { name: "Mediator", type: "Low-Level (GoF)" },
  { name: "Memento", type: "Low-Level (GoF)" },
  { name: "Observer", type: "Low-Level (GoF)" },
  { name: "State", type: "Low-Level (GoF)" },
  { name: "Strategy", type: "Low-Level (GoF)" },
  { name: "Template Method", type: "Low-Level (GoF)" },
  { name: "Visitor", type: "Low-Level (GoF)" },
  { name: "Null Object", type: "Low-Level (GoF)" },
  { name: "Dependency Injection", type: "Low-Level (GoF)" },
  { name: "Object Pool", type: "Low-Level (GoF)" },
  { name: "Specification", type: "Low-Level (GoF)" },
  { name: "Repository", type: "Low-Level (GoF)" },
  { name: "Unit of Work", type: "Low-Level (GoF)" },
  { name: "MVC / MVP / MVVM", type: "Low-Level (GoF)" },
];

/* =============================================================================
 * 6. Projects — 5 total, 1 every 12 days. Fill in real details later.
 * ============================================================================= */
const PROJECTS = [
  { title: "Project 1", description: "TBD — placeholder. Edit this in data.js." },
  { title: "Project 2", description: "TBD — placeholder. Edit this in data.js." },
  { title: "Project 3", description: "TBD — placeholder. Edit this in data.js." },
  { title: "Project 4", description: "TBD — placeholder. Edit this in data.js." },
  { title: "Project 5", description: "TBD — placeholder. Edit this in data.js." },
];
const DAYS_PER_PROJECT = 12;

/* =============================================================================
 * 7. AI — 6 courses (~110 hrs) + ~10 hrs supplementary, 2 hrs/day
 * ============================================================================= */
const AI_COURSE_HOURS = 110;
const AI_SUPPLEMENTARY_HOURS = 10;
const AI_TOTAL_HOURS = AI_COURSE_HOURS + AI_SUPPLEMENTARY_HOURS;
const AI_HOURS_PER_DAY = 2;
const AI_GENERIC_TASK = {
  title: "AI courses",
  description: "2 hrs of AI coursework/videos. Continue from where you left off across your 6 courses + supplementary YouTube content.",
};

/* =============================================================================
 * 8. Random Stuff — free-text/checkbox, no fixed source
 * ============================================================================= */
const RANDOM_STUFF_TASK = {
  title: "Random Stuff",
  description: "Watch or read one interesting/random tech thing today — anything that caught your eye.",
};

/* =============================================================================
 * CATEGORY METADATA (order, labels, colors used by the UI)
 * ============================================================================= */
const CATEGORIES = [
  { key: "dsa", label: "DSA" },
  { key: "java_spring", label: "Java+SpringBoot" },
  { key: "sql", label: "SQL" },
  { key: "system_design", label: "System Design" },
  { key: "design_patterns", label: "Design Patterns" },
  { key: "projects", label: "Projects" },
  { key: "ai", label: "AI" },
  { key: "random", label: "Random Stuff" },
];

/* =============================================================================
 * GENERATION LOGIC — builds the 60 x 8 structure from the config above.
 * Returns: { days: [ { day, tasks: [ {category, title, description, link} x8 ] } ] }
 * ============================================================================= */
function buildDSASchedule() {
  // Group problems by pattern, preserving first-seen order.
  const order = [];
  const byPattern = new Map();
  for (const p of DSA_PROBLEMS) {
    if (!byPattern.has(p.pattern)) {
      byPattern.set(p.pattern, []);
      order.push(p.pattern);
    }
    byPattern.get(p.pattern).push(p);
  }

  // schedule[day] = { patternName, videoTask (bool), problems: [...] }
  const schedule = {};
  for (let i = 0; i < 30; i++) {
    const day1 = i * 2 + 1;
    const day2 = i * 2 + 2;
    const patternName = order[i]; // undefined if fewer than 30 patterns supplied
    if (!patternName) {
      schedule[day1] = { patternName: null, problems: [], isVideoDay: false };
      schedule[day2] = { patternName: null, problems: [], isVideoDay: false };
      continue;
    }
    const problems = byPattern.get(patternName);
    const mid = Math.ceil(problems.length / 2);
    schedule[day1] = { patternName, problems: problems.slice(0, mid), isVideoDay: true };
    schedule[day2] = { patternName, problems: problems.slice(mid), isVideoDay: false };
  }
  return schedule;
}

function generateTracker() {
  const dsaSchedule = buildDSASchedule();
  const days = [];

  for (let d = 1; d <= TOTAL_DAYS; d++) {
    const tasks = [];

    // 1. DSA
    const dsaInfo = dsaSchedule[d];
    if (dsaInfo && dsaInfo.patternName) {
      const problemLines = dsaInfo.problems
        .map((p) => `#${p.number} ${p.problem}`)
        .join(", ");
      const videoNote = dsaInfo.isVideoDay ? DSA_PATTERN_VIDEO_TASK(dsaInfo.patternName) + " " : "";
      tasks.push({
        category: "dsa",
        title: `${dsaInfo.patternName} — ${dsaInfo.isVideoDay ? "Day 1/2" : "Day 2/2"}`,
        description: `${videoNote}Problems: ${problemLines || "(no problems loaded yet for this pattern)"}`,
        link: dsaInfo.problems[0] ? dsaInfo.problems[0].link : null,
        subLinks: dsaInfo.problems.map((p) => ({ label: `#${p.number} ${p.problem}`, url: p.link })),
      });
    } else {
      tasks.push({
        category: "dsa",
        title: "DSA — pattern not yet loaded",
        description: "Paste your DSA_PROBLEMS list in data.js to populate this day.",
        link: null,
      });
    }

    // 2. Java + Spring Boot
    const jsHoursDone = (d - 1) * JAVA_SPRING_HOURS_PER_DAY;
    const jsHoursLeft = Math.max(0, JAVA_SPRING_TOTAL_HOURS - jsHoursDone).toFixed(1);
    tasks.push({
      category: "java_spring",
      title: JAVA_SPRING_GENERIC_TASK.title,
      description: `${JAVA_SPRING_GENERIC_TASK.description} (~${jsHoursLeft} hrs remaining in the plan as of today.)`,
      link: null,
    });

    // 3. SQL
    const sqlHoursDone = (d - 1) * SQL_HOURS_PER_DAY;
    const sqlHoursLeft = Math.max(0, SQL_TOTAL_HOURS - sqlHoursDone).toFixed(1);
    tasks.push({
      category: "sql",
      title: SQL_GENERIC_TASK.title,
      description: `${SQL_GENERIC_TASK.description} (~${sqlHoursLeft} hrs remaining in the plan as of today.)`,
      link: null,
    });

    // 4. System Design
    const sdHoursDone = (d - 1) * SYSTEM_DESIGN_HOURS_PER_DAY;
    const sdHoursLeft = Math.max(0, SYSTEM_DESIGN_TOTAL_HOURS - sdHoursDone).toFixed(1);
    const sdExhausted = sdHoursDone >= SYSTEM_DESIGN_TOTAL_HOURS;
    tasks.push({
      category: "system_design",
      title: SYSTEM_DESIGN_GENERIC_TASK.title,
      description: sdExhausted
        ? `${SYSTEM_DESIGN_GENERIC_TASK.description} (Plan's ~${SYSTEM_DESIGN_TOTAL_HOURS} hrs are used up — keep going with extra HLD/LLD case studies of your choice.)`
        : `${SYSTEM_DESIGN_GENERIC_TASK.description} (~${sdHoursLeft} hrs remaining in the plan as of today.)`,
      link: null,
    });

    // 5. Design Patterns
    const pattern = DESIGN_PATTERNS[d - 1];
    tasks.push({
      category: "design_patterns",
      title: pattern ? `${pattern.name} (${pattern.type})` : "Pattern not configured",
      description: pattern
        ? `Study and implement a small example of the "${pattern.name}" pattern.`
        : "Add a 60th entry to DESIGN_PATTERNS in data.js.",
      link: null,
    });

    // 6. Projects
    const projIndex = Math.floor((d - 1) / DAYS_PER_PROJECT);
    const dayWithinProject = ((d - 1) % DAYS_PER_PROJECT) + 1;
    const proj = PROJECTS[projIndex];
    tasks.push({
      category: "projects",
      title: proj ? `${proj.title} — Day ${dayWithinProject}/${DAYS_PER_PROJECT}` : "Project not configured",
      description: proj ? proj.description : "Add a 5th project to PROJECTS in data.js.",
      link: null,
    });

    // 7. AI
    const aiHoursDone = (d - 1) * AI_HOURS_PER_DAY;
    const aiHoursLeft = Math.max(0, AI_TOTAL_HOURS - aiHoursDone).toFixed(1);
    tasks.push({
      category: "ai",
      title: AI_GENERIC_TASK.title,
      description: `${AI_GENERIC_TASK.description} (~${aiHoursLeft} hrs remaining in the plan as of today.)`,
      link: null,
    });

    // 8. Random Stuff
    tasks.push({
      category: "random",
      title: RANDOM_STUFF_TASK.title,
      description: RANDOM_STUFF_TASK.description,
      link: null,
    });

    days.push({ day: d, tasks });
  }

  return { days, categories: CATEGORIES, totalDays: TOTAL_DAYS };
}

/* =============================================================================
 * OPTIONAL: load DSA_PROBLEMS from an external dsa-problems.json at runtime
 * instead of hardcoding it above. If present, this overrides the sample data.
 * Call `await loadExternalDSAData()` before `generateTracker()` in app.js if
 * you want to use this. Otherwise the sample data above is used directly.
 * ============================================================================= */
async function loadExternalDSAData() {
  try {
    const res = await fetch("./dsa-problems.json", { cache: "no-store" });
    if (!res.ok) return false;
    const externalProblems = await res.json();
    if (Array.isArray(externalProblems) && externalProblems.length > 0) {
      DSA_PROBLEMS.length = 0;
      DSA_PROBLEMS.push(...externalProblems);
      return true;
    }
  } catch (e) {
    // no external file present — fall back to sample data silently
  }
  return false;
}

// Expose to app.js (plain <script> include, no bundler)
window.TrackerData = {
  generateTracker,
  loadExternalDSAData,
  CATEGORIES,
  TOTAL_DAYS,
  DESIGN_PATTERNS,
  PROJECTS,
  DSA_PROBLEMS,
};
