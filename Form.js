<!DOCTYPE html>
<html>
  <head>
    <base target="_top">
    <link rel="stylesheet" href="https://ssl.gstatic.com/docs/script/css/add-ons1.css">
    <style>
      input, select, button {
        width: 100%;
      }

      input:focus:invalid {
        border-color: #ff0000;
        border-width: 2px;
        outline: none;
      }

      option {
        font-size: 20px;
      }
    </style>
  </head>
  <body>
    <form id="dateForm" autocomplete="off">
      <label for="month">Month:</label>
      <select name="month" value="Please select a Month" required>
        <!-- <option selected="selected"></option> -->
        <option value="1">January</option>
        <option value="2">February</option>
        <option value="3">March</option>
        <option value="4">April</option>
        <option value="5">May</option>
        <option value="6">June</option>
        <option value="7">July</option>
        <option value="8">August</option>
        <option value="9">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
      <br><br>
      <label for="year">Year:</label>
      <select name="year" value="Please select a Year" required>
        <option value="2021">2021</option>
        <!-- <option value="2022">2022</option> -->
      </select>
      <br><br>
      <button type="button" id="submit" value="Submit" onClick="getDate();closeDialog();">Submit</button>
    </form>

    <script type="text/javascript">
      function getDate() {
        let form = document.getElementById("dateForm").elements;
        var array = [];
        for(let i = 0 ; i < form.length - 1; i++){
          let item = form.item(i);
          array.push(item.value);
        }
        google.script.run.setUpSheet(array);
      }
      
      function closeDialog() {
        google.script.host.close();
      }
    </script>
  </body>
</html>