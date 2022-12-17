# CypressPaperID

WEB UI automation test for Paper.id
<br>

# Test Strategy

   1. Manual Test
      1. Feature Test: to deep-test each feature and interaction (human-system, system-system)
      2. Functional test for end to end test cases 
      3. Exploratory test for integration tests with others menu
   
   2. Automation Test
      1. Sanity Test on staging: to simulate deployment to production and to ensure no issue
      
# Test Plan
1. Create & Verify invoice design and content on every page
2. Verify while user is able to edit or delete invoice
3. Verify invoice correctness when status = Unpaid
4. Verify invoice correctness when status = Paid
5. Verify invoice correctness when status = Overdue
6. Verify when user upload correct logo format
7. Verify when user upload an invalid logo format
8. Verify when user type custom invoice number while invoice is submitted
9. Verify when user create invoice with custom product
10. Verify when user create invoice with curated product
11. Verify User should able to sent & download Invoice
12. Create and verify when user add new mitra while invoice creation
13. Verify all mandatory input while user create invoice
14. Upload & verify when user upload sign then sign format is not acceptable
15. Verify sent invoice behavior via email address, whatsapp and messages text
16. Verify behavior when download then no internet connection should display error notification
17. Verify behavior when sent then no internet connection should display error notification
18. Verify behavior when download then server error connection should display error notification
19. Verify behavior when sent then server error connection should display error notification
20. Verify when the order has adjustment then it will be update on invoice PDF as well
21. Verify when user click save and sent invoice behavior
22. Verify when user click save and confirmed invoice behavior
23. Verify when user click save as draft behavior
24. Verify price summary when user add product then input qty & price
25. Verify total price section when user input delivery price & additional discount
26. Create and verify delivery product behavior
27. Verify invoice design and content when user sent invoice via email, wa & message text:
      1. Reference ID, Date, Due Date
      2. Size & Logo Position
      3. Penjual Name, address, phone * email
      4. Customer name, phone & email
      5. Product details & price Details


