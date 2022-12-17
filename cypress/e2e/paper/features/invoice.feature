Feature: Invoice Page

   Background: 
    Given user is on login page

  Scenario: Kandidat create new invoice and send to customer
    When user input email address with "kandidat@paper.id"
    And user clicks on lanjut button
    And user input password with "jakarta123"
    And user clicks on enter button
    And user open create invoice page
    And user click tambah invoice button
    And user type random invoice number
    And user select customer on customer dropdown
    And user clicks on tambah produk button
    And user select product on inventory modal and click simpan button
    And user type product qty "120"
    And user click simpan button and select simpan konfirmasi
    Then invoice number and status is corrected
    And user get back to invoice list page
    Then invoice number on invoice list is displayed
