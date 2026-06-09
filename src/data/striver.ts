export interface CuratedProblem {
  id: string;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  link: string;
}

export interface CuratedTopic {
  id: string;
  name: string;
  problems: CuratedProblem[];
}

export interface CuratedStep {
  id: string;
  name: string;
  topics: CuratedTopic[];
}

export const STRIVER_A2Z_SHEET: CuratedStep[] = [
  {
    "id": "step1",
    "name": "Step 1: Learn the Basics",
    "topics": [
      {
        "id": "step1.1",
        "name": "Things to Know in C++/Java/Python",
        "problems": [
          {
            "id": "1.1.1",
            "title": "Input Output",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/input-output"
          },
          {
            "id": "1.1.2",
            "title": "Cpp Basics",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/cpp"
          },
          {
            "id": "1.1.3",
            "title": "If ElseIf",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/if-elseif"
          },
          {
            "id": "1.1.4",
            "title": "Switch Case",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/switch-case"
          },
          {
            "id": "1.1.5",
            "title": "What are arrays, strings?",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/cpp"
          },
          {
            "id": "1.1.6",
            "title": "For loops",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/cpp"
          },
          {
            "id": "1.1.7",
            "title": "While loops",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/cpp"
          },
          {
            "id": "1.1.8",
            "title": "Functions (Pass by Reference and Value)",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/cpp"
          },
          {
            "id": "1.1.9",
            "title": "Theory with examples",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/theory-with-examples"
          }
        ]
      },
      {
        "id": "step1.2",
        "name": "Build-up Logical Thinking",
        "problems": [
          {
            "id": "1.2.1",
            "title": "Pattern Problems (Easy and Medium)",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/patterns"
          }
        ]
      },
      {
        "id": "step1.3",
        "name": "Learn STL/Java-Collections",
        "problems": [
          {
            "id": "1.3.1",
            "title": "C++ STL",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/c-stl"
          },
          {
            "id": "1.3.2",
            "title": "Java Collections",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/java-collections"
          }
        ]
      },
      {
        "id": "step1.4",
        "name": "Know Basic Maths",
        "problems": [
          {
            "id": "1.4.1",
            "title": "Count all Digits of a Number",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/count-digits"
          },
          {
            "id": "1.4.2",
            "title": "Reverse a Number",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/reverse-a-number"
          },
          {
            "id": "1.4.3",
            "title": "Palindrome Number",
            "difficulty": "Easy",
            "link": "https://leetcode.com/problems/palindrome-number/"
          },
          {
            "id": "1.4.4",
            "title": "GCD of Two Numbers",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/gcd-or-hcf"
          },
          {
            "id": "1.4.5",
            "title": "Check if Armstrong Number",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/armstrong-numbers"
          },
          {
            "id": "1.4.6",
            "title": "Print all Divisors",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/print-all-divisors"
          },
          {
            "id": "1.4.7",
            "title": "Check for Prime Number",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/check-for-prime"
          }
        ]
      },
      {
        "id": "step1.5",
        "name": "Learn Basic Recursion",
        "problems": [
          {
            "id": "1.5.1",
            "title": "Print something N times",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/understand-recursion-by-print-something-n-times"
          },
          {
            "id": "1.5.2",
            "title": "Print name N times using recursion",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/print-name-n-times-using-recursion"
          },
          {
            "id": "1.5.3",
            "title": "Print 1 to N using Recursion",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/print-1-to-n-using-recursion"
          },
          {
            "id": "1.5.4",
            "title": "Print N to 1 using Recursion",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/print-n-to-1-using-recursion"
          },
          {
            "id": "1.5.5",
            "title": "Sum of First N Numbers",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/sum-of-first-n-numbers"
          },
          {
            "id": "1.5.6",
            "title": "Factorial of a Number",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/factorial-of-n-numbers"
          },
          {
            "id": "1.5.7",
            "title": "Reverse an Array",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/reverse-an-array"
          },
          {
            "id": "1.5.8",
            "title": "Check if String is Palindrome",
            "difficulty": "Easy",
            "link": "https://leetcode.com/problems/valid-palindrome/"
          },
          {
            "id": "1.5.9",
            "title": "Fibonacci Number",
            "difficulty": "Easy",
            "link": "https://leetcode.com/problems/fibonacci-number/"
          }
        ]
      },
      {
        "id": "step1.6",
        "name": "Learn Basic Hashing",
        "problems": [
          {
            "id": "1.6.1",
            "title": "Basic Hashing",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/hashing-theory"
          },
          {
            "id": "1.6.2",
            "title": "Counting Frequencies of Array Elements",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/count-frequency-of-each-element-in-the-array"
          },
          {
            "id": "1.6.3",
            "title": "Highest Occurring Element in an Array",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/find-the-highest-lowest-frequency-element"
          }
        ]
      }
    ]
  },
  {
    "id": "step2",
    "name": "Step 2: Learn Important Sorting Techniques",
    "topics": [
      {
        "id": "step2.1",
        "name": "Sorting-I",
        "problems": [
          {
            "id": "2.1.1",
            "title": "Selection Sort",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/selection-sort"
          },
          {
            "id": "2.1.2",
            "title": "Bubble Sort",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/bubble-sort"
          },
          {
            "id": "2.1.3",
            "title": "Insertion Sort",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/insertion-sort"
          }
        ]
      },
      {
        "id": "step2.2",
        "name": "Sorting-II",
        "problems": [
          {
            "id": "2.2.1",
            "title": "Merge Sort",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/merge-sort"
          },
          {
            "id": "2.2.2",
            "title": "Recursive Bubble Sort",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/recursive-bubble-sort"
          },
          {
            "id": "2.2.3",
            "title": "Recursive Insertion Sort",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/recursive-insertion-sort"
          },
          {
            "id": "2.2.4",
            "title": "Quick Sort",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/quick-sort"
          }
        ]
      }
    ]
  },
  {
    "id": "step3",
    "name": "Step 3: Solve Problems on Arrays",
    "topics": [
      {
        "id": "step3.1",
        "name": "Easy",
        "problems": [
          {
            "id": "3.1.1",
            "title": "Largest Element in Array",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/largest-element"
          },
          {
            "id": "3.1.2",
            "title": "Second Largest Element",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/second-largest-element"
          },
          {
            "id": "3.1.3",
            "title": "Check if the Array is Sorted",
            "difficulty": "Easy",
            "link": "https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/"
          },
          {
            "id": "3.1.4",
            "title": "Remove Duplicates from Sorted Array",
            "difficulty": "Easy",
            "link": "https://leetcode.com/problems/remove-duplicates-from-sorted-array/"
          },
          {
            "id": "3.1.5",
            "title": "Left Rotate Array by One",
            "difficulty": "Easy",
            "link": "https://leetcode.com/problems/rotate-array/"
          },
          {
            "id": "3.1.6",
            "title": "Left Rotate Array by K Places",
            "difficulty": "Easy",
            "link": "https://leetcode.com/problems/rotate-array/"
          },
          {
            "id": "3.1.7",
            "title": "Move Zeros to End",
            "difficulty": "Easy",
            "link": "https://leetcode.com/problems/move-zeroes/"
          },
          {
            "id": "3.1.8",
            "title": "Linear Search",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/linear-search"
          },
          {
            "id": "3.1.9",
            "title": "Union of Two Sorted Arrays",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/find-the-union"
          },
          {
            "id": "3.1.10",
            "title": "Find Missing Number",
            "difficulty": "Easy",
            "link": "https://leetcode.com/problems/missing-number/"
          },
          {
            "id": "3.1.11",
            "title": "Maximum Consecutive Ones",
            "difficulty": "Easy",
            "link": "https://leetcode.com/problems/max-consecutive-ones/"
          },
          {
            "id": "3.1.12",
            "title": "Find the Number that Appears Once",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/single-number/"
          },
          {
            "id": "3.1.13",
            "title": "Longest Subarray with Sum K (Positives)",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/longest-subarray-with-given-sum-k-positives-"
          },
          {
            "id": "3.1.14",
            "title": "Longest Subarray with Sum K",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/longest-subarray-with-sum-k-positives-negatives-"
          }
        ]
      },
      {
        "id": "step3.2",
        "name": "Medium",
        "problems": [
          {
            "id": "3.2.1",
            "title": "Two Sum",
            "difficulty": "Easy",
            "link": "https://leetcode.com/problems/two-sum/"
          },
          {
            "id": "3.2.2",
            "title": "Sort an Array of 0s 1s and 2s",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/sort-colors/"
          },
          {
            "id": "3.2.3",
            "title": "Majority Element (>n/2)",
            "difficulty": "Easy",
            "link": "https://leetcode.com/problems/majority-element/"
          },
          {
            "id": "3.2.4",
            "title": "Kadane's Algorithm - Maximum Subarray Sum",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/maximum-subarray/"
          },
          {
            "id": "3.2.5",
            "title": "Print Subarray with Maximum Sum",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/kadane's-algorithm"
          },
          {
            "id": "3.2.6",
            "title": "Stock Buy and Sell",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"
          },
          {
            "id": "3.2.7",
            "title": "Rearrange Array Elements by Sign",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/rearrange-array-elements-by-sign/"
          },
          {
            "id": "3.2.8",
            "title": "Next Permutation",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/next-permutation/"
          },
          {
            "id": "3.2.9",
            "title": "Leaders in an Array",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/leaders-in-an-array"
          },
          {
            "id": "3.2.10",
            "title": "Longest Consecutive Sequence",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/longest-consecutive-sequence/"
          },
          {
            "id": "3.2.11",
            "title": "Set Matrix Zeroes",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/set-matrix-zeroes/"
          },
          {
            "id": "3.2.12",
            "title": "Rotate Matrix by 90 Degrees",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/rotate-image/"
          },
          {
            "id": "3.2.13",
            "title": "Print Matrix in Spiral Manner",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/spiral-matrix/"
          },
          {
            "id": "3.2.14",
            "title": "Count Subarrays with Given Sum",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/subarray-sum-equals-k/"
          }
        ]
      },
      {
        "id": "step3.3",
        "name": "Hard",
        "problems": [
          {
            "id": "3.3.1",
            "title": "Pascal's Triangle",
            "difficulty": "Easy",
            "link": "https://leetcode.com/problems/pascals-triangle/"
          },
          {
            "id": "3.3.2",
            "title": "Majority Element II (>n/3)",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/majority-element-ii/"
          },
          {
            "id": "3.3.3",
            "title": "3Sum",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/3sum/"
          },
          {
            "id": "3.3.4",
            "title": "4Sum",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/4sum/"
          },
          {
            "id": "3.3.5",
            "title": "Largest Subarray with Sum 0",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/largest-subarray-with-sum-0"
          },
          {
            "id": "3.3.6",
            "title": "Count Subarrays with Given XOR K",
            "difficulty": "Hard",
            "link": "https://takeuforward.org/plus/dsa/problems/count-subarrays-with-given-xor-k"
          },
          {
            "id": "3.3.7",
            "title": "Merge Overlapping Subintervals",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/merge-intervals/"
          },
          {
            "id": "3.3.8",
            "title": "Merge Two Sorted Arrays Without Extra Space",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/merge-sorted-array/"
          },
          {
            "id": "3.3.9",
            "title": "Find the Repeating and Missing Number",
            "difficulty": "Hard",
            "link": "https://takeuforward.org/plus/dsa/problems/find-the-repeating-and-missing-number"
          },
          {
            "id": "3.3.10",
            "title": "Count Inversions",
            "difficulty": "Hard",
            "link": "https://takeuforward.org/plus/dsa/problems/count-inversions"
          },
          {
            "id": "3.3.11",
            "title": "Reverse Pairs",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/reverse-pairs/"
          },
          {
            "id": "3.3.12",
            "title": "Maximum Product Subarray",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/maximum-product-subarray/"
          }
        ]
      }
    ]
  },
  {
    "id": "step4",
    "name": "Step 4: Binary Search",
    "topics": [
      {
        "id": "step4.1",
        "name": "BS on 1D Arrays",
        "problems": [
          {
            "id": "4.1.1",
            "title": "Binary Search",
            "difficulty": "Easy",
            "link": "https://leetcode.com/problems/binary-search/"
          },
          {
            "id": "4.1.2",
            "title": "Lower Bound",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/lower-bound-"
          },
          {
            "id": "4.1.3",
            "title": "Upper Bound",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/upper-bound"
          },
          {
            "id": "4.1.4",
            "title": "Search Insert Position",
            "difficulty": "Easy",
            "link": "https://leetcode.com/problems/search-insert-position/"
          },
          {
            "id": "4.1.5",
            "title": "Floor and Ceil in Sorted Array",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/floor-and-ceil-in-sorted-array"
          },
          {
            "id": "4.1.6",
            "title": "First and Last Occurrence",
            "difficulty": "Easy",
            "link": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/"
          },
          {
            "id": "4.1.7",
            "title": "Count Occurrences in Sorted Array",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/count-occurrences-in-a-sorted-array"
          },
          {
            "id": "4.1.8",
            "title": "Search in Rotated Sorted Array I",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/search-in-rotated-sorted-array/"
          },
          {
            "id": "4.1.9",
            "title": "Search in Rotated Sorted Array II",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/"
          },
          {
            "id": "4.1.10",
            "title": "Find Minimum in Rotated Sorted Array",
            "difficulty": "Easy",
            "link": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/"
          },
          {
            "id": "4.1.11",
            "title": "Find How Many Times Array is Rotated",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/find-out-how-many-times-the-array-is-rotated"
          },
          {
            "id": "4.1.12",
            "title": "Single Element in Sorted Array",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/single-element-in-a-sorted-array/"
          },
          {
            "id": "4.1.13",
            "title": "Find Peak Element",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/find-peak-element/"
          }
        ]
      },
      {
        "id": "step4.2",
        "name": "BS on Answers",
        "problems": [
          {
            "id": "4.2.1",
            "title": "Find Square Root of a Number",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/find-square-root-of-a-number"
          },
          {
            "id": "4.2.2",
            "title": "Find Nth Root of a Number",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/find-nth-root-of-a-number"
          },
          {
            "id": "4.2.3",
            "title": "Koko Eating Bananas",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/koko-eating-bananas/"
          },
          {
            "id": "4.2.4",
            "title": "Minimum Days to Make M Bouquets",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/"
          },
          {
            "id": "4.2.5",
            "title": "Find the Smallest Divisor",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/"
          },
          {
            "id": "4.2.6",
            "title": "Capacity to Ship Packages Within D Days",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/"
          },
          {
            "id": "4.2.7",
            "title": "Kth Missing Positive Number",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/kth-missing-positive-number/"
          },
          {
            "id": "4.2.8",
            "title": "Aggressive Cows",
            "difficulty": "Hard",
            "link": "https://takeuforward.org/plus/dsa/problems/aggressive-cows"
          },
          {
            "id": "4.2.9",
            "title": "Book Allocation Problem",
            "difficulty": "Hard",
            "link": "https://takeuforward.org/plus/dsa/problems/book-allocation-problem"
          },
          {
            "id": "4.2.10",
            "title": "Split Array - Largest Sum",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/split-array-largest-sum/"
          },
          {
            "id": "4.2.11",
            "title": "Painter's Partition",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/painter's-partition"
          },
          {
            "id": "4.2.12",
            "title": "Minimize Max Distance to Gas Station",
            "difficulty": "Hard",
            "link": "https://takeuforward.org/plus/dsa/problems/minimize-max-distance-to-gas-station"
          },
          {
            "id": "4.2.13",
            "title": "Median of Two Sorted Arrays",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/median-of-two-sorted-arrays/"
          },
          {
            "id": "4.2.14",
            "title": "Kth Element of Two Sorted Arrays",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/kth-element-of-2-sorted-arrays"
          }
        ]
      },
      {
        "id": "step4.3",
        "name": "BS on 2D Arrays",
        "problems": [
          {
            "id": "4.3.1",
            "title": "Find Row with Maximum 1s",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/find-the-row-with-maximum-number-of-1's"
          },
          {
            "id": "4.3.2",
            "title": "Search in a 2D Matrix",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/search-a-2d-matrix/"
          },
          {
            "id": "4.3.3",
            "title": "Search in 2D Matrix II",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/search-a-2d-matrix-ii/"
          },
          {
            "id": "4.3.4",
            "title": "Find Peak Element II",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/find-a-peak-element-ii/"
          },
          {
            "id": "4.3.5",
            "title": "Matrix Median",
            "difficulty": "Hard",
            "link": "https://takeuforward.org/plus/dsa/problems/matrix-median"
          }
        ]
      }
    ]
  },
  {
    "id": "step5",
    "name": "Step 5: Strings [Basic and Medium]",
    "topics": [
      {
        "id": "step5.1",
        "name": "Basic and Easy String Problems",
        "problems": [
          {
            "id": "5.1.1",
            "title": "Remove Outermost Parentheses",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/remove-outermost-parentheses/"
          },
          {
            "id": "5.1.2",
            "title": "Reverse Words in a String",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/reverse-words-in-a-string/"
          },
          {
            "id": "5.1.3",
            "title": "Largest Odd Number in String",
            "difficulty": "Easy",
            "link": "https://leetcode.com/problems/largest-odd-number-in-string/"
          },
          {
            "id": "5.1.4",
            "title": "Longest Common Prefix",
            "difficulty": "Easy",
            "link": "https://leetcode.com/problems/longest-common-prefix/"
          },
          {
            "id": "5.1.5",
            "title": "Isomorphic Strings",
            "difficulty": "Easy",
            "link": "https://leetcode.com/problems/isomorphic-strings/"
          },
          {
            "id": "5.1.6",
            "title": "Rotate String",
            "difficulty": "Easy",
            "link": "https://leetcode.com/problems/rotate-string/"
          },
          {
            "id": "5.1.7",
            "title": "Check if Two Strings are Anagram",
            "difficulty": "Easy",
            "link": "https://leetcode.com/problems/valid-anagram/"
          }
        ]
      },
      {
        "id": "step5.2",
        "name": "Medium String Problems",
        "problems": [
          {
            "id": "5.2.1",
            "title": "Sort Characters by Frequency",
            "difficulty": "Easy",
            "link": "https://leetcode.com/problems/sort-characters-by-frequency/"
          },
          {
            "id": "5.2.2",
            "title": "Maximum Nesting Depth of Parentheses",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/"
          },
          {
            "id": "5.2.3",
            "title": "Roman to Integer",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/roman-to-integer/"
          },
          {
            "id": "5.2.4",
            "title": "String to Integer (atoi)",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/string-to-integer-atoi/"
          },
          {
            "id": "5.2.5",
            "title": "Count Number of Substrings",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/count-number-of-substrings"
          },
          {
            "id": "5.2.6",
            "title": "Longest Palindromic Substring",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/longest-palindromic-substring/"
          },
          {
            "id": "5.2.7",
            "title": "Sum of Beauty of All Substrings",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/sum-of-beauty-of-all-substrings/"
          },
          {
            "id": "5.2.8",
            "title": "Reverse Every Word in a String",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/minimum-characters-needed-to-be-inserted-to-make-a-string-palindrome"
          }
        ]
      }
    ]
  },
  {
    "id": "step6",
    "name": "Step 6: Learn LinkedList",
    "topics": [
      {
        "id": "step6.1",
        "name": "Learn 1D LinkedList",
        "problems": [
          {
            "id": "6.1.1",
            "title": "Introduction to Singly LinkedList",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/introduction-to-singly-linkedlist"
          },
          {
            "id": "6.1.2",
            "title": "Insertion at Head of Linked List",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/insertion-at-the-head-of-ll"
          },
          {
            "id": "6.1.3",
            "title": "Deletion of Head of LL",
            "difficulty": "Easy",
            "link": "https://leetcode.com/problems/delete-node-in-a-linked-list/"
          },
          {
            "id": "6.1.4",
            "title": "Find Length of Linked List",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/find-the-length-of-the-linked-list"
          },
          {
            "id": "6.1.5",
            "title": "Search in Linked List",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/search-in-linked-list"
          }
        ]
      },
      {
        "id": "step6.2",
        "name": "Learn Doubly LinkedList",
        "problems": [
          {
            "id": "6.2.1",
            "title": "Introduction to Doubly LL",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/introduction-to-doubly-ll"
          },
          {
            "id": "6.2.2",
            "title": "Insert Node Before Head in DLL",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/insert-at-the-end-of-doubly-ll"
          },
          {
            "id": "6.2.3",
            "title": "Delete Head of DLL",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/delete-last-node-of-doubly-ll"
          },
          {
            "id": "6.2.4",
            "title": "Reverse a Doubly Linked List",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/reverse-a-doubly-linked-list"
          }
        ]
      },
      {
        "id": "step6.3",
        "name": "Medium Problems of LL",
        "problems": [
          {
            "id": "6.3.1",
            "title": "Middle of a LinkedList",
            "difficulty": "Easy",
            "link": "https://leetcode.com/problems/middle-of-the-linked-list/"
          },
          {
            "id": "6.3.2",
            "title": "Reverse a LinkedList [Iterative]",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/reverse-linked-list/"
          },
          {
            "id": "6.3.3",
            "title": "Reverse a LinkedList [Recursive]",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/reverse-linked-list/"
          },
          {
            "id": "6.3.4",
            "title": "Detect a Loop in LL",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/linked-list-cycle/"
          },
          {
            "id": "6.3.5",
            "title": "Find Starting Point of Loop in LL",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/linked-list-cycle-ii/"
          },
          {
            "id": "6.3.6",
            "title": "Length of Loop in LL",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/length-of-loop-in-ll"
          },
          {
            "id": "6.3.7",
            "title": "Check if LL is Palindrome",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/palindrome-linked-list/"
          },
          {
            "id": "6.3.8",
            "title": "Segregate Odd and Even Nodes in LL",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/odd-even-linked-list/"
          },
          {
            "id": "6.3.9",
            "title": "Remove Nth Node from End of LL",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/"
          },
          {
            "id": "6.3.10",
            "title": "Delete the Middle Node of LL",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/"
          },
          {
            "id": "6.3.11",
            "title": "Sort Linked List",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/sort-list/"
          },
          {
            "id": "6.3.12",
            "title": "Sort LL of 0s 1s and 2s",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/sort-a-linked-list-of-0s-1s-and-2s"
          },
          {
            "id": "6.3.13",
            "title": "Find Intersection Point of Y LL",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/intersection-of-two-linked-lists/"
          },
          {
            "id": "6.3.14",
            "title": "Add One to Number Represented by LL",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/add-1-to-a-number-represented-by-ll"
          },
          {
            "id": "6.3.15",
            "title": "Add Two Numbers in Linked List",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/add-two-numbers/"
          }
        ]
      },
      {
        "id": "step6.4",
        "name": "Medium Problems of DLL",
        "problems": [
          {
            "id": "6.4.1",
            "title": "Delete All Occurrences of a Key in DLL",
            "difficulty": "Hard",
            "link": "https://takeuforward.org/plus/dsa/problems/delete-all-occurrences-of-a-key-in-dll"
          },
          {
            "id": "6.4.2",
            "title": "Find Pairs with Given Sum in DLL",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/find-pairs-with-given-sum-in-dll"
          },
          {
            "id": "6.4.3",
            "title": "Remove Duplicates from Sorted DLL",
            "difficulty": "Hard",
            "link": "https://takeuforward.org/plus/dsa/problems/remove-duplicates-from-sorted-dll"
          }
        ]
      },
      {
        "id": "step6.5",
        "name": "Hard Problems of LL",
        "problems": [
          {
            "id": "6.5.1",
            "title": "Reverse LL in Groups of Size K",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/reverse-nodes-in-k-group/"
          },
          {
            "id": "6.5.2",
            "title": "Rotate a Linked List",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/rotate-list/"
          },
          {
            "id": "6.5.3",
            "title": "Flattening of LL",
            "difficulty": "Hard",
            "link": "https://takeuforward.org/plus/dsa/problems/flattening-of-ll"
          },
          {
            "id": "6.5.4",
            "title": "Clone a LL with Random and Next Pointer",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/copy-list-with-random-pointer/"
          }
        ]
      }
    ]
  },
  {
    "id": "step7",
    "name": "Step 7: Recursion [PatternWise]",
    "topics": [
      {
        "id": "step7.1",
        "name": "Get a Strong Hold",
        "problems": [
          {
            "id": "7.1.1",
            "title": "Recursive Implementation of atoi()",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/recursive-implementation-of-atoi"
          },
          {
            "id": "7.1.2",
            "title": "Pow(x, n)",
            "difficulty": "Easy",
            "link": "https://leetcode.com/problems/powx-n/"
          },
          {
            "id": "7.1.3",
            "title": "Count Good Numbers",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/count-good-numbers/"
          },
          {
            "id": "7.1.4",
            "title": "Sort a Stack using Recursion",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/sort-a-stack-using-recursion"
          },
          {
            "id": "7.1.5",
            "title": "Reverse a Stack using Recursion",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/reverse-a-stack-using-recursion"
          }
        ]
      },
      {
        "id": "step7.2",
        "name": "Subsequences Pattern",
        "problems": [
          {
            "id": "7.2.1",
            "title": "Generate Binary Strings Without Consecutive 1s",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/data-structure/generate-all-binary-strings"
          },
          {
            "id": "7.2.2",
            "title": "Generate Parentheses",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/generate-parentheses/"
          },
          {
            "id": "7.2.3",
            "title": "Power Set",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/print-all-subsequences"
          },
          {
            "id": "7.2.4",
            "title": "Learn All Patterns of Subsequences (Theory)",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/learn-all-patterns-of-subsequences"
          },
          {
            "id": "7.2.5",
            "title": "Count All Subsequences with Sum K",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/count-all-subsequences-with-sum-k"
          },
          {
            "id": "7.2.6",
            "title": "Check if Subsequence with Sum K Exists",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/check-if-there-exists-a-subsequence-with-sum-k"
          },
          {
            "id": "7.2.7",
            "title": "Combination Sum",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/combination-sum/"
          },
          {
            "id": "7.2.8",
            "title": "Combination Sum II",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/combination-sum-ii/"
          },
          {
            "id": "7.2.9",
            "title": "Subsets I",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/subset-sum-i"
          },
          {
            "id": "7.2.10",
            "title": "Subsets II",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/subsets-ii/"
          },
          {
            "id": "7.2.11",
            "title": "Combination Sum III",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/string-permutations"
          },
          {
            "id": "7.2.12",
            "title": "Letter Combinations of a Phone Number",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/permutations-ii/"
          }
        ]
      },
      {
        "id": "step7.3",
        "name": "Trying out all Combos / Hard",
        "problems": [
          {
            "id": "7.3.1",
            "title": "Palindrome Partitioning",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/n-queens/"
          },
          {
            "id": "7.3.2",
            "title": "Word Search",
            "difficulty": "Hard",
            "link": "https://takeuforward.org/plus/dsa/problems/rat-in-a-maze"
          },
          {
            "id": "7.3.3",
            "title": "N-Queens",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/word-break-ii/"
          },
          {
            "id": "7.3.4",
            "title": "Rat in a Maze",
            "difficulty": "Hard",
            "link": "https://takeuforward.org/plus/dsa/problems/m-coloring-problem"
          },
          {
            "id": "7.3.5",
            "title": "Word Break",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/palindrome-partitioning/"
          },
          {
            "id": "7.3.6",
            "title": "M Coloring Problem",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/permutation-sequence/"
          },
          {
            "id": "7.3.7",
            "title": "Sudoku Solver",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/sudoku-solver/"
          },
          {
            "id": "7.3.8",
            "title": "Expression Add Operators",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/expression-add-operators/"
          }
        ]
      }
    ]
  },
  {
    "id": "step8",
    "name": "Step 8: Bit Manipulation",
    "topics": [
      {
        "id": "step8.1",
        "name": "Learn Bit Manipulation",
        "problems": [
          {
            "id": "8.1.1",
            "title": "Introduction to Bits and Tricks",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/introduction-to-bits-and-tricks"
          },
          {
            "id": "8.1.2",
            "title": "Check if ith Bit is Set",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/check-if-the-i-th-bit-is-set-or-not"
          },
          {
            "id": "8.1.3",
            "title": "Check if Number is Odd",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/check-if-a-number-is-odd-or-not"
          },
          {
            "id": "8.1.4",
            "title": "Check if Power of 2",
            "difficulty": "Easy",
            "link": "https://leetcode.com/problems/power-of-two/"
          },
          {
            "id": "8.1.5",
            "title": "Count the Number of Set Bits",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/count-the-number-of-set-bits"
          },
          {
            "id": "8.1.6",
            "title": "Set/Unset the Rightmost Unset Bit",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/data-structure/set-the-rightmost-bit"
          },
          {
            "id": "8.1.7",
            "title": "Swap Two Numbers",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/swap-two-numbers"
          },
          {
            "id": "8.1.8",
            "title": "Divide Two Numbers Without * and /",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/divide-two-integers/"
          }
        ]
      },
      {
        "id": "step8.2",
        "name": "Interview Problems",
        "problems": [
          {
            "id": "8.2.1",
            "title": "Minimum Bit Flips to Convert Number",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/minimum-bit-flips-to-convert-number/"
          },
          {
            "id": "8.2.2",
            "title": "Single Number I",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/single-number/"
          },
          {
            "id": "8.2.3",
            "title": "Power Set using Bit Manipulation",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/subsets/"
          },
          {
            "id": "8.2.4",
            "title": "XOR of Numbers in Given Range",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/xor-of-numbers-in-a-given-range"
          },
          {
            "id": "8.2.5",
            "title": "Single Number III",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/single-number---iii"
          }
        ]
      },
      {
        "id": "step8.3",
        "name": "Advanced Maths",
        "problems": [
          {
            "id": "8.3.1",
            "title": "Print Prime Factors of a Number",
            "difficulty": "Hard",
            "link": "https://takeuforward.org/plus/dsa/problems/prime-factorisation-of-a-number"
          },
          {
            "id": "8.3.2",
            "title": "Divisors of a Number",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/divisors-of-a-number"
          },
          {
            "id": "8.3.3",
            "title": "Count Primes in Range L to R",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/count-primes/"
          },
          {
            "id": "8.3.4",
            "title": "Prime Factorization using Sieve",
            "difficulty": "Hard",
            "link": "https://takeuforward.org/plus/dsa/problems/prime-factorisation-of-a-number"
          },
          {
            "id": "8.3.5",
            "title": "Pow(x, n)",
            "difficulty": "Easy",
            "link": "https://leetcode.com/problems/powx-n/"
          }
        ]
      }
    ]
  },
  {
    "id": "step9",
    "name": "Step 9: Stack and Queues",
    "topics": [
      {
        "id": "step9.1",
        "name": "Learning",
        "problems": [
          {
            "id": "9.1.1",
            "title": "Implement Stack using Arrays",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/implement-stack-using-arrays"
          },
          {
            "id": "9.1.2",
            "title": "Implement Queue using Arrays",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/implement-queue-using-arrays"
          },
          {
            "id": "9.1.3",
            "title": "Implement Stack using Queues",
            "difficulty": "Easy",
            "link": "https://leetcode.com/problems/implement-stack-using-queues/"
          },
          {
            "id": "9.1.4",
            "title": "Implement Queue using Stacks",
            "difficulty": "Easy",
            "link": "https://leetcode.com/problems/implement-queue-using-stacks/"
          },
          {
            "id": "9.1.5",
            "title": "Implement Stack using LinkedList",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/implement-stack-using-linkedlist"
          },
          {
            "id": "9.1.6",
            "title": "Implement Queue using LinkedList",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/implement-queue-using-linkedlist"
          },
          {
            "id": "9.1.7",
            "title": "Balanced Parentheses",
            "difficulty": "Easy",
            "link": "https://leetcode.com/problems/valid-parentheses/"
          },
          {
            "id": "9.1.8",
            "title": "Implement Min Stack",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/min-stack/"
          }
        ]
      },
      {
        "id": "step9.2",
        "name": "Prefix, Infix, PostFix Conversions",
        "problems": [
          {
            "id": "9.2.1",
            "title": "Infix to Postfix Conversion",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/infix-to-postfix-conversion"
          },
          {
            "id": "9.2.2",
            "title": "Prefix to Infix Conversion",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/prefix-to-infix-conversion"
          },
          {
            "id": "9.2.3",
            "title": "Prefix to Postfix Conversion",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/prefix-to-postfix-conversion"
          },
          {
            "id": "9.2.4",
            "title": "Postfix to Prefix Conversion",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/postfix-to-prefix-conversion"
          },
          {
            "id": "9.2.5",
            "title": "Postfix to Infix Conversion",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/postfix-to-infix-conversion"
          },
          {
            "id": "9.2.6",
            "title": "Infix to Prefix Conversion",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/infix-to-prefix-conversion"
          }
        ]
      },
      {
        "id": "step9.3",
        "name": "Monotonic Stack/Queue Problems",
        "problems": [
          {
            "id": "9.3.1",
            "title": "Next Greater Element",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/next-greater-element-i/"
          },
          {
            "id": "9.3.2",
            "title": "Next Greater Element II (Circular)",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/next-greater-element-ii/"
          },
          {
            "id": "9.3.3",
            "title": "Next Smaller Element",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/next-smaller-element"
          },
          {
            "id": "9.3.4",
            "title": "Number of Greater Elements to the Right",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/number-of-greater-elements-to-the-right"
          },
          {
            "id": "9.3.5",
            "title": "Trapping Rainwater",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/trapping-rain-water/"
          },
          {
            "id": "9.3.6",
            "title": "Sum of Subarray Minimums",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/sum-of-subarray-minimums/"
          },
          {
            "id": "9.3.7",
            "title": "Asteroid Collision",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/asteroid-collision/"
          },
          {
            "id": "9.3.8",
            "title": "Sum of Subarray Ranges",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/sum-of-subarray-ranges/"
          },
          {
            "id": "9.3.9",
            "title": "Remove K Digits",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/remove-k-digits/"
          },
          {
            "id": "9.3.10",
            "title": "Largest Rectangle in Histogram",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/largest-rectangle-in-histogram/"
          },
          {
            "id": "9.3.11",
            "title": "Maximal Rectangle",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/maximal-rectangle/"
          }
        ]
      },
      {
        "id": "step9.4",
        "name": "Implementation Problems",
        "problems": [
          {
            "id": "9.4.1",
            "title": "Sliding Window Maximum",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/sliding-window-maximum/"
          },
          {
            "id": "9.4.2",
            "title": "Stock Span Problem",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/online-stock-span/"
          },
          {
            "id": "9.4.3",
            "title": "Celebrity Problem",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/find-the-celebrity/"
          },
          {
            "id": "9.4.4",
            "title": "LRU Cache",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/lru-cache"
          },
          {
            "id": "9.4.5",
            "title": "LFU Cache",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/lfu-cache/"
          }
        ]
      }
    ]
  },
  {
    "id": "step10",
    "name": "Step 10: Sliding Window & Two Pointer",
    "topics": [
      {
        "id": "step10.1",
        "name": "Medium Problems",
        "problems": [
          {
            "id": "10.1.1",
            "title": "Longest Substring Without Repeating Characters",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/longest-substring-without-repeating-characters/"
          },
          {
            "id": "10.1.2",
            "title": "Max Consecutive Ones III",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/max-consecutive-ones-iii/"
          },
          {
            "id": "10.1.3",
            "title": "Fruit Into Baskets",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/fruit-into-baskets"
          },
          {
            "id": "10.1.4",
            "title": "Longest Repeating Character Replacement",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/longest-repeating-character-replacement/"
          },
          {
            "id": "10.1.5",
            "title": "Binary Subarrays With Sum",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/binary-subarrays-with-sum/"
          },
          {
            "id": "10.1.6",
            "title": "Count Number of Nice Subarrays",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/count-number-of-nice-subarrays/"
          },
          {
            "id": "10.1.7",
            "title": "Number of Substrings Containing All Three Characters",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/"
          },
          {
            "id": "10.1.8",
            "title": "Maximum Points You Can Obtain from Cards",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/"
          }
        ]
      },
      {
        "id": "step10.2",
        "name": "Hard Problems",
        "problems": [
          {
            "id": "10.2.1",
            "title": "Longest Substring With At Most K Distinct Characters",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/"
          },
          {
            "id": "10.2.2",
            "title": "Subarrays with K Different Integers",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/subarrays-with-k-different-integers/"
          },
          {
            "id": "10.2.3",
            "title": "Minimum Window Substring",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/minimum-window-substring/"
          },
          {
            "id": "10.2.4",
            "title": "Minimum Window Subsequence",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/minimum-window-subsequence/"
          }
        ]
      }
    ]
  },
  {
    "id": "step11",
    "name": "Step 11: Heaps",
    "topics": [
      {
        "id": "step11.1",
        "name": "Learning",
        "problems": [
          {
            "id": "11.1.1",
            "title": "Heaps Theory",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/heaps-theory"
          },
          {
            "id": "11.1.2",
            "title": "Implement Min Heap",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/implement-min-heap"
          },
          {
            "id": "11.1.3",
            "title": "Check if Array Represents Min Heap",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/check-if-an-array-represents-a-min-heap-"
          },
          {
            "id": "11.1.4",
            "title": "Convert Min Heap to Max Heap",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/convert-min-heap-to-max-heap"
          }
        ]
      },
      {
        "id": "step11.2",
        "name": "Medium Problems",
        "problems": [
          {
            "id": "11.2.1",
            "title": "Kth Largest Element in Array",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/k-th-largest-element-in-an-array"
          },
          {
            "id": "11.2.2",
            "title": "Kth Smallest Element in Array",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/k-th-largest-element-in-an-array"
          },
          {
            "id": "11.2.3",
            "title": "Sort K Sorted Array",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/data-structure/sort-k-sorted-array"
          },
          {
            "id": "11.2.4",
            "title": "Merge K Sorted Lists",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/merge-k-sorted-lists/"
          },
          {
            "id": "11.2.5",
            "title": "Replace Elements by Their Rank",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/replace-elements-by-their-rank"
          },
          {
            "id": "11.2.6",
            "title": "Task Scheduler",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/task-scheduler/"
          },
          {
            "id": "11.2.7",
            "title": "Hand of Straights",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/hand-of-straights/"
          }
        ]
      },
      {
        "id": "step11.3",
        "name": "Hard Problems",
        "problems": [
          {
            "id": "11.3.1",
            "title": "Design Twitter",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/design-twitter/"
          },
          {
            "id": "11.3.2",
            "title": "Minimum Cost to Connect Sticks",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/minimum-cost-to-connect-sticks"
          },
          {
            "id": "11.3.3",
            "title": "Kth Largest Element in Stream",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/kth-largest-element-in-a-stream/"
          },
          {
            "id": "11.3.4",
            "title": "Maximum Sum Combination",
            "difficulty": "Hard",
            "link": "https://takeuforward.org/plus/dsa/problems/maximum-sum-combination"
          },
          {
            "id": "11.3.5",
            "title": "Find Median from Data Stream",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/find-median-from-data-stream/"
          },
          {
            "id": "11.3.6",
            "title": "Top K Frequent Elements",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/top-k-frequent-elements/"
          }
        ]
      }
    ]
  },
  {
    "id": "step12",
    "name": "Step 12: Greedy Algorithms",
    "topics": [
      {
        "id": "step12.1",
        "name": "Easy Problems",
        "problems": [
          {
            "id": "12.1.1",
            "title": "Assign Cookies",
            "difficulty": "Easy",
            "link": "https://leetcode.com/problems/assign-cookies/"
          },
          {
            "id": "12.1.2",
            "title": "Fractional Knapsack",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/fractional-knapsack"
          },
          {
            "id": "12.1.3",
            "title": "Minimum Coins (Greedy)",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/coin-change/"
          },
          {
            "id": "12.1.4",
            "title": "Lemonade Change",
            "difficulty": "Easy",
            "link": "https://leetcode.com/problems/lemonade-change/"
          },
          {
            "id": "12.1.5",
            "title": "Valid Parenthesis String",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/valid-parenthesis-string/"
          }
        ]
      },
      {
        "id": "step12.2",
        "name": "Medium/Hard Problems",
        "problems": [
          {
            "id": "12.2.1",
            "title": "N Meetings in One Room",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/n-meetings-in-one-room"
          },
          {
            "id": "12.2.2",
            "title": "Jump Game I",
            "difficulty": "Easy",
            "link": "https://leetcode.com/problems/jump-game/"
          },
          {
            "id": "12.2.3",
            "title": "Jump Game II",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/jump-game-ii/"
          },
          {
            "id": "12.2.4",
            "title": "Minimum Platforms for Railway Station",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/minimum-number-of-platforms-required-for-a-railway"
          },
          {
            "id": "12.2.5",
            "title": "Job Sequencing Problem",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/job-sequencing-problem"
          },
          {
            "id": "12.2.6",
            "title": "Candy",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/candy/"
          },
          {
            "id": "12.2.7",
            "title": "Shortest Job First (SJF)",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/shortest-job-first"
          },
          {
            "id": "12.2.8",
            "title": "LRU Page Replacement Algorithm",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/lru-cache"
          },
          {
            "id": "12.2.9",
            "title": "Insert Interval",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/insert-interval/"
          },
          {
            "id": "12.2.10",
            "title": "Merge Intervals",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/merge-intervals/"
          },
          {
            "id": "12.2.11",
            "title": "Non-overlapping Intervals",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/non-overlapping-intervals/"
          }
        ]
      }
    ]
  },
  {
    "id": "step13",
    "name": "Step 13: Binary Trees",
    "topics": [
      {
        "id": "step13.1",
        "name": "Traversals",
        "problems": [
          {
            "id": "13.1.1",
            "title": "Introduction to Trees",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/introduction-"
          },
          {
            "id": "13.1.2",
            "title": "Binary Tree Introduction",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/introduction-"
          },
          {
            "id": "13.1.3",
            "title": "Binary Tree Representation",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/introduction-"
          },
          {
            "id": "13.1.4",
            "title": "Pre, Post, Inorder in One Traversal",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/pre,-post,-inorder-in-one-traversal"
          },
          {
            "id": "13.1.5",
            "title": "Preorder Traversal",
            "difficulty": "Easy",
            "link": "https://leetcode.com/problems/binary-tree-preorder-traversal/"
          },
          {
            "id": "13.1.6",
            "title": "Inorder Traversal",
            "difficulty": "Easy",
            "link": "https://leetcode.com/problems/binary-tree-inorder-traversal/"
          },
          {
            "id": "13.1.7",
            "title": "Postorder Traversal",
            "difficulty": "Easy",
            "link": "https://leetcode.com/problems/binary-tree-postorder-traversal/"
          },
          {
            "id": "13.1.8",
            "title": "Level Order Traversal",
            "difficulty": "Easy",
            "link": "https://leetcode.com/problems/binary-tree-level-order-traversal/"
          },
          {
            "id": "13.1.9",
            "title": "Iterative Preorder Traversal",
            "difficulty": "Easy",
            "link": "https://leetcode.com/problems/binary-tree-preorder-traversal/"
          },
          {
            "id": "13.1.10",
            "title": "Iterative Inorder Traversal",
            "difficulty": "Easy",
            "link": "https://leetcode.com/problems/binary-tree-inorder-traversal/"
          },
          {
            "id": "13.1.11",
            "title": "Postorder Using 2 Stacks",
            "difficulty": "Easy",
            "link": "https://leetcode.com/problems/binary-tree-postorder-traversal/"
          },
          {
            "id": "13.1.12",
            "title": "Postorder Using 1 Stack",
            "difficulty": "Easy",
            "link": "https://leetcode.com/problems/binary-tree-postorder-traversal/"
          },
          {
            "id": "13.1.13",
            "title": "All Three Traversals in One",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/pre,-post,-inorder-in-one-traversal"
          }
        ]
      },
      {
        "id": "step13.2",
        "name": "Medium Problems",
        "problems": [
          {
            "id": "13.2.1",
            "title": "Maximum Depth of Binary Tree",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/maximum-depth-of-binary-tree/"
          },
          {
            "id": "13.2.2",
            "title": "Check for Balanced Binary Tree",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/balanced-binary-tree/"
          },
          {
            "id": "13.2.3",
            "title": "Diameter of Binary Tree",
            "difficulty": "Easy",
            "link": "https://leetcode.com/problems/diameter-of-binary-tree/"
          },
          {
            "id": "13.2.4",
            "title": "Maximum Path Sum",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/binary-tree-maximum-path-sum/"
          },
          {
            "id": "13.2.5",
            "title": "Check if Two Trees are Identical",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/same-tree/"
          },
          {
            "id": "13.2.6",
            "title": "Zigzag / Spiral Traversal",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/"
          },
          {
            "id": "13.2.7",
            "title": "Boundary Traversal",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/boundary-of-binary-tree/"
          },
          {
            "id": "13.2.8",
            "title": "Vertical Order Traversal",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/"
          },
          {
            "id": "13.2.9",
            "title": "Top View of Binary Tree",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/top-view-of-bt"
          },
          {
            "id": "13.2.10",
            "title": "Bottom View of Binary Tree",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/bottom-view-of-bt"
          },
          {
            "id": "13.2.11",
            "title": "Right/Left View of Binary Tree",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/binary-tree-right-side-view/"
          },
          {
            "id": "13.2.12",
            "title": "Symmetric Binary Tree",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/symmetric-tree/"
          }
        ]
      },
      {
        "id": "step13.3",
        "name": "Hard Problems",
        "problems": [
          {
            "id": "13.3.1",
            "title": "Root to Leaf Paths",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/print-root-to-note-path-in-bt"
          },
          {
            "id": "13.3.2",
            "title": "LCA in Binary Tree",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/"
          },
          {
            "id": "13.3.3",
            "title": "Maximum Width of Binary Tree",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/maximum-width-of-binary-tree/"
          },
          {
            "id": "13.3.4",
            "title": "Children Sum Property",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/children-sum-property-in-binary-tree"
          },
          {
            "id": "13.3.5",
            "title": "Nodes at Distance K",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/"
          },
          {
            "id": "13.3.6",
            "title": "Minimum Time to Burn BT from Node",
            "difficulty": "Hard",
            "link": "https://takeuforward.org/plus/dsa/problems/minimum-time-taken-to-burn-the-bt-from-a-given-node"
          },
          {
            "id": "13.3.7",
            "title": "Count Total Nodes in Complete BT",
            "difficulty": "Easy",
            "link": "https://leetcode.com/problems/count-complete-tree-nodes/"
          },
          {
            "id": "13.3.8",
            "title": "Requirements to Construct Unique BT",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/requirements-needed-to-construct-a-unique-bt"
          },
          {
            "id": "13.3.9",
            "title": "Construct BT from Preorder and Inorder",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/"
          },
          {
            "id": "13.3.10",
            "title": "Construct BT from Postorder and Inorder",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/"
          },
          {
            "id": "13.3.11",
            "title": "Serialize and Deserialize BT",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/"
          },
          {
            "id": "13.3.12",
            "title": "Morris Preorder Traversal",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/binary-tree-inorder-traversal/"
          },
          {
            "id": "13.3.13",
            "title": "Morris Inorder Traversal",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/binary-tree-inorder-traversal/"
          },
          {
            "id": "13.3.14",
            "title": "Flatten Binary Tree to Linked List",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/"
          }
        ]
      }
    ]
  },
  {
    "id": "step14",
    "name": "Step 14: Binary Search Trees",
    "topics": [
      {
        "id": "step14.1",
        "name": "Concepts",
        "problems": [
          {
            "id": "14.1.1",
            "title": "Introduction to BST",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/introduction-to-bst"
          },
          {
            "id": "14.1.2",
            "title": "Search in a BST",
            "difficulty": "Easy",
            "link": "https://leetcode.com/problems/search-in-a-binary-search-tree/"
          },
          {
            "id": "14.1.3",
            "title": "Find Min/Max in BST",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/data-structure/find-minmax-in-a-bst"
          }
        ]
      },
      {
        "id": "step14.2",
        "name": "Practice Problems",
        "problems": [
          {
            "id": "14.2.1",
            "title": "Floor and Ceil in BST",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/floor-and-ceil-in-a-bst"
          },
          {
            "id": "14.2.2",
            "title": "Floor in a BST",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/floor-and-ceil-in-a-bst"
          },
          {
            "id": "14.2.3",
            "title": "Insert a Node in BST",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/insert-into-a-binary-search-tree/"
          },
          {
            "id": "14.2.4",
            "title": "Delete a Node in BST",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/delete-node-in-a-bst/"
          },
          {
            "id": "14.2.5",
            "title": "Kth Smallest/Largest in BST",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/kth-smallest-element-in-a-bst/"
          },
          {
            "id": "14.2.6",
            "title": "Validate BST",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/validate-binary-search-tree/"
          },
          {
            "id": "14.2.7",
            "title": "LCA in BST",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/"
          },
          {
            "id": "14.2.8",
            "title": "Construct BST from Preorder",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/"
          },
          {
            "id": "14.2.9",
            "title": "Inorder Successor/Predecessor in BST",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/inorder-successor-in-bst/"
          },
          {
            "id": "14.2.10",
            "title": "Merge Two BSTs",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/binary-search-tree-iterator/"
          },
          {
            "id": "14.2.11",
            "title": "Two Sum in BST",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/two-sum-iv-input-is-a-bst/"
          },
          {
            "id": "14.2.12",
            "title": "Recover BST (Two Nodes Swapped)",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/recover-binary-search-tree/"
          },
          {
            "id": "14.2.13",
            "title": "Largest BST in Binary Tree",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/"
          }
        ]
      }
    ]
  },
  {
    "id": "step15",
    "name": "Step 15: Graphs",
    "topics": [
      {
        "id": "step15.1",
        "name": "Learning",
        "problems": [
          {
            "id": "15.1.1",
            "title": "Introduction to Graph",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/introduction-to-graph"
          },
          {
            "id": "15.1.2",
            "title": "Graph Representation C++",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/introduction-to-graph"
          },
          {
            "id": "15.1.3",
            "title": "Graph Representation Java",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/introduction-to-graph"
          },
          {
            "id": "15.1.4",
            "title": "Connected Components",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/connected-components"
          },
          {
            "id": "15.1.5",
            "title": "BFS Traversal",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/traversal-techniques"
          },
          {
            "id": "15.1.6",
            "title": "DFS Traversal",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/traversal-techniques"
          }
        ]
      },
      {
        "id": "step15.2",
        "name": "Problems on BFS/DFS",
        "problems": [
          {
            "id": "15.2.1",
            "title": "Number of Provinces",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/number-of-provinces/"
          },
          {
            "id": "15.2.2",
            "title": "Connected Components in Matrix",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/connected-components"
          },
          {
            "id": "15.2.3",
            "title": "Rotten Oranges",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/rotting-oranges/"
          },
          {
            "id": "15.2.4",
            "title": "Flood Fill",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/flood-fill/"
          },
          {
            "id": "15.2.5",
            "title": "Cycle Detection Undirected Graph (BFS)",
            "difficulty": "Hard",
            "link": "https://takeuforward.org/plus/dsa/problems/detect-a-cycle-in-an-undirected-graph"
          },
          {
            "id": "15.2.6",
            "title": "Cycle Detection Undirected Graph (DFS)",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/course-schedule/"
          },
          {
            "id": "15.2.7",
            "title": "Distance of Nearest Cell Having 1",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/01-matrix/"
          },
          {
            "id": "15.2.8",
            "title": "Surrounded Regions",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/surrounded-regions/"
          },
          {
            "id": "15.2.9",
            "title": "Number of Enclaves",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/number-of-enclaves/"
          },
          {
            "id": "15.2.10",
            "title": "Word Ladder I",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/word-ladder/"
          },
          {
            "id": "15.2.11",
            "title": "Word Ladder II",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/word-ladder-ii/"
          },
          {
            "id": "15.2.12",
            "title": "Number of Islands",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/number-of-islands/"
          },
          {
            "id": "15.2.13",
            "title": "Bipartite Graph (DFS)",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/is-graph-bipartite/"
          },
          {
            "id": "15.2.14",
            "title": "Cycle Detection in Directed Graph (DFS)",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/course-schedule-ii/"
          }
        ]
      },
      {
        "id": "step15.3",
        "name": "Topo Sort and Problems",
        "problems": [
          {
            "id": "15.3.1",
            "title": "Topological Sort (DFS)",
            "difficulty": "Hard",
            "link": "https://takeuforward.org/plus/dsa/problems/topological-sort-or-kahns-algorithm"
          },
          {
            "id": "15.3.2",
            "title": "Kahn's Algorithm (BFS Topo Sort)",
            "difficulty": "Hard",
            "link": "https://takeuforward.org/plus/dsa/problems/topological-sort-or-kahns-algorithm"
          },
          {
            "id": "15.3.3",
            "title": "Detect Cycle in Directed Graph (Topo Sort)",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/course-schedule/"
          },
          {
            "id": "15.3.4",
            "title": "Course Schedule I",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/course-schedule/"
          },
          {
            "id": "15.3.5",
            "title": "Course Schedule II",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/course-schedule-ii/"
          },
          {
            "id": "15.3.6",
            "title": "Find Eventual Safe States",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/find-eventual-safe-states/"
          },
          {
            "id": "15.3.7",
            "title": "Alien Dictionary",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/alien-dictionary/"
          }
        ]
      },
      {
        "id": "step15.4",
        "name": "Shortest Path Algorithms",
        "problems": [
          {
            "id": "15.4.1",
            "title": "Shortest Path in Undirected Graph (Unit Weights)",
            "difficulty": "Hard",
            "link": "https://takeuforward.org/plus/dsa/problems/shortest-path-in-undirected-graph-with-unit-weights"
          },
          {
            "id": "15.4.2",
            "title": "Shortest Path in DAG",
            "difficulty": "Hard",
            "link": "https://takeuforward.org/plus/dsa/problems/shortest-path-in-dag"
          },
          {
            "id": "15.4.3",
            "title": "Dijkstra's Algorithm",
            "difficulty": "Hard",
            "link": "https://takeuforward.org/plus/dsa/problems/dijkstra's-algorithm"
          },
          {
            "id": "15.4.4",
            "title": "Why Priority Queue in Dijkstra's",
            "difficulty": "Hard",
            "link": "https://takeuforward.org/plus/dsa/problems/dijkstra's-algorithm"
          },
          {
            "id": "15.4.5",
            "title": "Shortest Distance in Binary Maze",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/shortest-path-in-binary-matrix/"
          },
          {
            "id": "15.4.6",
            "title": "Path with Minimum Effort",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/path-with-minimum-effort/"
          },
          {
            "id": "15.4.7",
            "title": "Cheapest Flights Within K Stops",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/cheapest-flights-within-k-stops/"
          },
          {
            "id": "15.4.8",
            "title": "Network Delay Time",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/network-delay-time/"
          },
          {
            "id": "15.4.9",
            "title": "Number of Ways to Arrive at Destination",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/"
          },
          {
            "id": "15.4.10",
            "title": "Minimum Multiplications to Reach End",
            "difficulty": "Hard",
            "link": "https://takeuforward.org/plus/dsa/problems/minimum-multiplications-to-reach-end"
          },
          {
            "id": "15.4.11",
            "title": "Bellman-Ford Algorithm",
            "difficulty": "Hard",
            "link": "https://takeuforward.org/plus/dsa/problems/bellman-ford-algorithm"
          },
          {
            "id": "15.4.12",
            "title": "Floyd-Warshall Algorithm",
            "difficulty": "Hard",
            "link": "https://takeuforward.org/plus/dsa/problems/floyd-warshall-algorithm"
          },
          {
            "id": "15.4.13",
            "title": "City With Smallest Number of Neighbors at Threshold",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/"
          }
        ]
      },
      {
        "id": "step15.5",
        "name": "MST / Disjoint Set Problems",
        "problems": [
          {
            "id": "15.5.1",
            "title": "MST Theory",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/mst-theory"
          },
          {
            "id": "15.5.2",
            "title": "Prim's Algorithm",
            "difficulty": "Hard",
            "link": "https://takeuforward.org/plus/dsa/problems/find-the-mst-weight"
          },
          {
            "id": "15.5.3",
            "title": "Disjoint Set Union (DSU)",
            "difficulty": "Hard",
            "link": "https://takeuforward.org/plus/dsa/problems/disjoint-set-"
          },
          {
            "id": "15.5.4",
            "title": "Kruskal's Algorithm (Find MST Weight)",
            "difficulty": "Hard",
            "link": "https://takeuforward.org/plus/dsa/problems/find-the-mst-weight"
          },
          {
            "id": "15.5.5",
            "title": "Number of Operations to Make Network Connected",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/number-of-operations-to-make-network-connected/"
          },
          {
            "id": "15.5.6",
            "title": "Most Stones Removed",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/"
          },
          {
            "id": "15.5.7",
            "title": "Accounts Merge",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/accounts-merge/"
          },
          {
            "id": "15.5.8",
            "title": "Number of Islands II (Online)",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/number-of-islands-ii/"
          },
          {
            "id": "15.5.9",
            "title": "Making a Large Island",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/making-a-large-island/"
          },
          {
            "id": "15.5.10",
            "title": "Swim in Rising Water",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/swim-in-rising-water/"
          }
        ]
      },
      {
        "id": "step15.6",
        "name": "Other Algorithms",
        "problems": [
          {
            "id": "15.6.1",
            "title": "Bridges in Graph",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/critical-connections-in-a-network/"
          },
          {
            "id": "15.6.2",
            "title": "Articulation Points",
            "difficulty": "Hard",
            "link": "https://takeuforward.org/plus/dsa/problems/articulation-point-in-graph"
          },
          {
            "id": "15.6.3",
            "title": "Kosaraju's Algorithm (SCCs)",
            "difficulty": "Hard",
            "link": "https://takeuforward.org/plus/dsa/problems/mst-theory"
          }
        ]
      }
    ]
  },
  {
    "id": "step16",
    "name": "Step 16: Dynamic Programming",
    "topics": [
      {
        "id": "step16.1",
        "name": "Introduction to DP",
        "problems": [
          {
            "id": "16.1.1",
            "title": "Introduction to DP",
            "difficulty": "Easy",
            "link": "https://takeuforward.org/plus/dsa/problems/introduction-to-dp"
          }
        ]
      },
      {
        "id": "step16.2",
        "name": "1D DP",
        "problems": [
          {
            "id": "16.2.1",
            "title": "Climbing Stairs",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/climbing-stairs/"
          },
          {
            "id": "16.2.2",
            "title": "Frog Jump (Variable Cost)",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/frog-jump"
          },
          {
            "id": "16.2.3",
            "title": "Frog Jump with K Distances",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/frog-jump-with-k-distances"
          },
          {
            "id": "16.2.4",
            "title": "Maximum Sum of Non-Adjacent Elements",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/house-robber/"
          },
          {
            "id": "16.2.5",
            "title": "House Robber (Circular)",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/house-robber-ii/"
          }
        ]
      },
      {
        "id": "step16.3",
        "name": "2D/3D DP and DP on Grids",
        "problems": [
          {
            "id": "16.3.1",
            "title": "Ninja's Training",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/ninja's-training"
          },
          {
            "id": "16.3.2",
            "title": "Grid Unique Paths",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/unique-paths/"
          },
          {
            "id": "16.3.3",
            "title": "Unique Paths II (Obstacles)",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/unique-paths-ii/"
          },
          {
            "id": "16.3.4",
            "title": "Minimum Path Sum in Grid",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/minimum-path-sum/"
          },
          {
            "id": "16.3.5",
            "title": "Triangle",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/triangle/"
          },
          {
            "id": "16.3.6",
            "title": "Minimum Falling Path Sum",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/minimum-path-sum/"
          },
          {
            "id": "16.3.7",
            "title": "Ninja and Friends (3D DP)",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/ninja-and-his-friends"
          }
        ]
      },
      {
        "id": "step16.4",
        "name": "DP on Subsequences",
        "problems": [
          {
            "id": "16.4.1",
            "title": "Subset Sum Equal to Target",
            "difficulty": "Hard",
            "link": "https://takeuforward.org/plus/dsa/problems/subset-sum-equals-to-target"
          },
          {
            "id": "16.4.2",
            "title": "Partition Equal Subset Sum",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/partition-equal-subset-sum/"
          },
          {
            "id": "16.4.3",
            "title": "Partition with Minimum Absolute Sum Difference",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/"
          },
          {
            "id": "16.4.4",
            "title": "Count Subsets with Sum K",
            "difficulty": "Hard",
            "link": "https://takeuforward.org/plus/dsa/problems/count-subsets-with-sum-k"
          },
          {
            "id": "16.4.5",
            "title": "Count Partitions with Given Difference",
            "difficulty": "Hard",
            "link": "https://takeuforward.org/plus/dsa/problems/count-partitions-with-given-difference"
          },
          {
            "id": "16.4.6",
            "title": "0/1 Knapsack",
            "difficulty": "Easy",
            "link": "https://leetcode.com/problems/assign-cookies/"
          },
          {
            "id": "16.4.7",
            "title": "Minimum Coins",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/coin-change/"
          },
          {
            "id": "16.4.8",
            "title": "Target Sum",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/target-sum/"
          },
          {
            "id": "16.4.9",
            "title": "Coin Change 2 (Count Ways)",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/coin-change-2/"
          },
          {
            "id": "16.4.10",
            "title": "Unbounded Knapsack",
            "difficulty": "Hard",
            "link": "https://takeuforward.org/plus/dsa/problems/unbounded-knapsack"
          },
          {
            "id": "16.4.11",
            "title": "Rod Cutting Problem",
            "difficulty": "Hard",
            "link": "https://takeuforward.org/plus/dsa/problems/rod-cutting-problem"
          }
        ]
      },
      {
        "id": "step16.5",
        "name": "DP on Strings",
        "problems": [
          {
            "id": "16.5.1",
            "title": "Longest Common Subsequence",
            "difficulty": "Hard",
            "link": "https://takeuforward.org/plus/dsa/problems/longest-common-subsequence"
          },
          {
            "id": "16.5.2",
            "title": "Print Longest Common Subsequence",
            "difficulty": "Hard",
            "link": "https://takeuforward.org/plus/dsa/problems/longest-common-subsequence"
          },
          {
            "id": "16.5.3",
            "title": "Longest Common Substring",
            "difficulty": "Hard",
            "link": "https://takeuforward.org/plus/dsa/problems/longest-common-substring"
          },
          {
            "id": "16.5.4",
            "title": "Longest Palindromic Subsequence",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/longest-palindromic-subsequence/"
          },
          {
            "id": "16.5.5",
            "title": "Minimum Insertions to Make Palindrome",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/"
          },
          {
            "id": "16.5.6",
            "title": "Minimum Insertions/Deletions to Convert A to B",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/delete-operation-for-two-strings/"
          },
          {
            "id": "16.5.7",
            "title": "Shortest Common Supersequence",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/shortest-common-supersequence/"
          },
          {
            "id": "16.5.8",
            "title": "Distinct Subsequences",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/distinct-subsequences/"
          },
          {
            "id": "16.5.9",
            "title": "Edit Distance",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/edit-distance/"
          },
          {
            "id": "16.5.10",
            "title": "Wildcard Matching",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/wildcard-matching/"
          }
        ]
      },
      {
        "id": "step16.6",
        "name": "DP on Stocks",
        "problems": [
          {
            "id": "16.6.1",
            "title": "Best Time to Buy and Sell Stock I",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"
          },
          {
            "id": "16.6.2",
            "title": "Best Time to Buy and Sell Stock II",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/"
          },
          {
            "id": "16.6.3",
            "title": "Best Time to Buy and Sell Stock III",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/"
          },
          {
            "id": "16.6.4",
            "title": "Best Time to Buy and Sell Stock IV",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/"
          },
          {
            "id": "16.6.5",
            "title": "Best Time with Cooldown",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/"
          },
          {
            "id": "16.6.6",
            "title": "Best Time with Transaction Fee",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/"
          }
        ]
      },
      {
        "id": "step16.7",
        "name": "DP on LIS",
        "problems": [
          {
            "id": "16.7.1",
            "title": "Longest Increasing Subsequence",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/longest-increasing-subsequence"
          },
          {
            "id": "16.7.2",
            "title": "Print Longest Increasing Subsequence",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/print-longest-increasing-subsequence"
          },
          {
            "id": "16.7.3",
            "title": "LIS using Binary Search",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/longest-increasing-subsequence"
          },
          {
            "id": "16.7.4",
            "title": "Largest Divisible Subset",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/largest-divisible-subset/"
          },
          {
            "id": "16.7.5",
            "title": "Longest String Chain",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/longest-string-chain/"
          },
          {
            "id": "16.7.6",
            "title": "Longest Bitonic Subsequence",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/longest-bitonic-subsequence"
          },
          {
            "id": "16.7.7",
            "title": "Number of Longest Increasing Subsequences",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/number-of-longest-increasing-subsequence/"
          }
        ]
      },
      {
        "id": "step16.8",
        "name": "MCM DP / Partition DP",
        "problems": [
          {
            "id": "16.8.1",
            "title": "Matrix Chain Multiplication",
            "difficulty": "Hard",
            "link": "https://takeuforward.org/plus/dsa/problems/matrix-chain-multiplication"
          },
          {
            "id": "16.8.2",
            "title": "MCM Bottom-Up",
            "difficulty": "Hard",
            "link": "https://takeuforward.org/plus/dsa/problems/matrix-chain-multiplication"
          },
          {
            "id": "16.8.3",
            "title": "Minimum Cost to Cut Stick",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/minimum-cost-to-cut-a-stick/"
          },
          {
            "id": "16.8.4",
            "title": "Burst Balloons",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/burst-balloons/"
          },
          {
            "id": "16.8.5",
            "title": "Evaluate Boolean Expression",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/parsing-a-boolean-expression/"
          },
          {
            "id": "16.8.6",
            "title": "Palindrome Partitioning II",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/palindrome-partitioning-ii/"
          },
          {
            "id": "16.8.7",
            "title": "Partition Array for Maximum Sum",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/partition-array-for-maximum-sum/"
          }
        ]
      },
      {
        "id": "step16.9",
        "name": "DP on Squares",
        "problems": [
          {
            "id": "16.9.1",
            "title": "Maximum Rectangle Area with All 1s",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/maximal-rectangle/"
          },
          {
            "id": "16.9.2",
            "title": "Count Square Submatrices with All Ones",
            "difficulty": "Easy",
            "link": "https://leetcode.com/problems/count-square-submatrices-with-all-ones/"
          }
        ]
      }
    ]
  },
  {
    "id": "step17",
    "name": "Step 17: Tries",
    "topics": [
      {
        "id": "step17.1",
        "name": "Theory",
        "problems": [
          {
            "id": "17.1.1",
            "title": "Trie Implementation and Operations",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/implement-trie-prefix-tree/"
          }
        ]
      },
      {
        "id": "step17.2",
        "name": "Problems",
        "problems": [
          {
            "id": "17.2.1",
            "title": "Trie Implementation - Advanced Operations",
            "difficulty": "Hard",
            "link": "https://takeuforward.org/plus/dsa/problems/trie-implementation-and-advanced-operations"
          },
          {
            "id": "17.2.2",
            "title": "Longest Word with All Prefixes",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/longest-word-with-all-prefixes"
          },
          {
            "id": "17.2.3",
            "title": "Number of Distinct Substrings",
            "difficulty": "Medium",
            "link": "https://takeuforward.org/plus/dsa/problems/number-of-distinct-substrings-in-a-string"
          },
          {
            "id": "17.2.4",
            "title": "Bit Prerequisites for Trie Problems",
            "difficulty": "Easy",
            "link": "https://leetcode.com/problemset/all/"
          },
          {
            "id": "17.2.5",
            "title": "Maximum XOR of Two Numbers in Array",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/"
          },
          {
            "id": "17.2.6",
            "title": "Maximum XOR with Element from Array",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/maximum-xor-with-an-element-from-array/"
          }
        ]
      }
    ]
  },
  {
    "id": "step18",
    "name": "Step 18: Strings [Hard]",
    "topics": [
      {
        "id": "step18.1",
        "name": "Hard Problems",
        "problems": [
          {
            "id": "18.1.1",
            "title": "Minimum Bracket Reversals",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/"
          },
          {
            "id": "18.1.2",
            "title": "Count and Say",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/count-and-say/"
          },
          {
            "id": "18.1.3",
            "title": "Hashing in Strings (Theory)",
            "difficulty": "Easy",
            "link": "https://leetcode.com/problemset/all/"
          },
          {
            "id": "18.1.4",
            "title": "Rabin-Karp Algorithm",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problemset/all/"
          },
          {
            "id": "18.1.5",
            "title": "Z Function",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problemset/all/"
          },
          {
            "id": "18.1.6",
            "title": "KMP Algorithm / LPS Array",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/implement-strstr/"
          },
          {
            "id": "18.1.7",
            "title": "Shortest Palindrome",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problemset/all/"
          },
          {
            "id": "18.1.8",
            "title": "Longest Happy Prefix",
            "difficulty": "Hard",
            "link": "https://leetcode.com/problems/longest-happy-prefix/"
          },
          {
            "id": "18.1.9",
            "title": "Count Palindromic Subsequences",
            "difficulty": "Medium",
            "link": "https://leetcode.com/problems/palindromic-substrings/"
          }
        ]
      }
    ]
  }
];