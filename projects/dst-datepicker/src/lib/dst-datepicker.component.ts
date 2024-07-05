import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dst-datepicker',
  templateUrl: './dst-datepicker.component.html',
  styleUrls: ['./dst-datepicker.component.scss']
})
export class DstDatepickerComponent {
  dateInput: any = "";
  isDropdownOpen: boolean = false;
  selectedMode: any = null;
  startDate: any = null;
  endDate: any = null;
  showSingleDatePicker = false;
  showDatePickerRange = false;
  // date mode list
  dateModes = [
    {
      name: 'Today', value: 'today'
    },
    {
      name: 'Yesterday', value: 'yesterDay'
    },
    {
      name: 'Next Day', value: 'nextDay'
    },
    {
      name: 'This Week', value: 'currentWeek'
    },
    {
      name: 'This Month', value: 'currentMonth'
    },
    {
      name: 'This Quarter', value: 'currentQuarter'
    },
    {
      name: 'This Year', value: 'currentYear'
    },
    {
      name: 'Previous Week', value: 'previousWeek'
    },
    {
      name: 'Previous Month', value: 'previousMonth'
    },
    {
      name: 'Previous Quarter', value: 'previousQuarter'
    },
    {
      name: 'Previous Year', value: 'previousYear'
    },
    {
      name: 'Next Week', value: 'nextWeek'
    },
    {
      name: 'Next Month', value: 'nextMonth'
    },
    {
      name: 'Next Quarter', value: 'nextQuarter'
    },
    {
      name: 'Next Year', value: 'nextYear'
    },
    {
      name: 'Custom', value: 'custom'
    },
    {
      name: 'Custom Range', value: 'customRange'
    },
  ]

  constructor(private datePipe: DatePipe) {
  }

  resetData() {
    this.selectedMode = null;
    this.startDate = null;
    this.endDate = null;
    this.showSingleDatePicker = false;
    this.showDatePickerRange = false;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  setStartOfDay(date: any) {
    date.setHours(0, 0, 0, 0);
    return date;
  };
  setEndOfDay(date: any) {
    date.setHours(23, 59, 59, 999);
    return date;
  };

  selectOption(event: any) {
    this.resetData();
    this.selectedMode = event.value;
    const today = new Date();
    switch (event.value) {
      case 'today':
        this.dateInput = event.name;
        this.isDropdownOpen = false;
        this.startDate = this.setStartOfDay(new Date(today));
        this.endDate = this.setEndOfDay(new Date(today));
        break;
      case 'yesterDay':
        this.dateInput = event.name;
        this.isDropdownOpen = false;
        this.startDate = this.setStartOfDay(new Date(today));
        this.startDate.setDate(today.getDate() - 1);
        this.endDate = this.setEndOfDay(new Date(this.startDate));
        break;
      case 'nextDay':
        this.dateInput = event.name;
        this.isDropdownOpen = false;
        this.startDate = this.setStartOfDay(new Date(today));
        this.startDate.setDate(today.getDate() + 1);
        this.endDate = this.setEndOfDay(new Date(this.startDate));
        break;
      case 'currentWeek':
        this.dateInput = event.name;
        this.isDropdownOpen = false;
        this.startDate = new Date(today);
        this.startDate.setDate(today.getDate() - today.getDay());
        this.startDate = this.setStartOfDay(this.startDate);
        this.endDate = new Date(this.startDate);
        this.endDate.setDate(this.startDate.getDate() + 6);
        this.endDate = this.setEndOfDay(this.endDate);
        break;
      case 'currentMonth':
        this.dateInput = event.name;
        this.isDropdownOpen = false;
        this.startDate = this.setStartOfDay(new Date(today.getFullYear(), today.getMonth(), 1));
        this.endDate = this.setEndOfDay(new Date(today.getFullYear(), today.getMonth() + 1, 0));
        break;
      case 'currentQuarter':
        this.dateInput = event.name;
        this.isDropdownOpen = false;
        let currentQuarterStartMonth;
        if (today.getMonth() < 3) {
          currentQuarterStartMonth = 0;
        } else if (today.getMonth() < 6) {
          currentQuarterStartMonth = 3;
        } else if (today.getMonth() < 9) {
          currentQuarterStartMonth = 6;
        } else {
          currentQuarterStartMonth = 9;
        }
        this.startDate = this.setStartOfDay(new Date(today.getFullYear(), currentQuarterStartMonth, 1));
        this.endDate = this.setEndOfDay(new Date(today.getFullYear(), currentQuarterStartMonth + 3, 0));
        break;
      case 'currentYear':
        this.dateInput = event.name;
        this.isDropdownOpen = false;
        this.startDate = this.setStartOfDay(new Date(today.getFullYear(), 0, 1));
        this.endDate = this.setEndOfDay(new Date(today.getFullYear(), 11, 31));
        break;
      case 'previousWeek':
        this.dateInput = event.name;
        this.isDropdownOpen = false;
        this.startDate = new Date(today);
        this.startDate.setDate(today.getDate() - today.getDay() - 7);
        this.startDate = this.setStartOfDay(this.startDate);
        this.endDate = new Date(this.startDate);
        this.endDate.setDate(this.startDate.getDate() + 6);
        this.endDate = this.setEndOfDay(this.endDate);
        break;
      case 'previousMonth':
        this.dateInput = event.name;
        this.isDropdownOpen = false;
        this.startDate = this.setStartOfDay(new Date(today.getFullYear(), today.getMonth() - 1, 1));
        this.endDate = this.setEndOfDay(new Date(today.getFullYear(), today.getMonth(), 0));
        break;
      case 'previousQuarter':
        this.dateInput = event.name;
        this.isDropdownOpen = false;
        let prevQuarterStartMonth;
        if (today.getMonth() < 3) {
          prevQuarterStartMonth = 9;
          this.startDate = this.setStartOfDay(new Date(today.getFullYear() - 1, prevQuarterStartMonth, 1));
          this.endDate = this.setEndOfDay(new Date(today.getFullYear() - 1, prevQuarterStartMonth + 2, 31));
        } else if (today.getMonth() < 6) {
          prevQuarterStartMonth = 0;
          this.startDate = this.setStartOfDay(new Date(today.getFullYear(), prevQuarterStartMonth, 1));
          this.endDate = this.setEndOfDay(new Date(today.getFullYear(), prevQuarterStartMonth + 2, 31));
        } else if (today.getMonth() < 9) {
          prevQuarterStartMonth = 3;
          this.startDate = this.setStartOfDay(new Date(today.getFullYear(), prevQuarterStartMonth, 1));
          this.endDate = this.setEndOfDay(new Date(today.getFullYear(), prevQuarterStartMonth + 2, 30));
        } else {
          prevQuarterStartMonth = 6;
          this.startDate = this.setStartOfDay(new Date(today.getFullYear(), prevQuarterStartMonth, 1));
          this.endDate = this.setEndOfDay(new Date(today.getFullYear(), prevQuarterStartMonth + 2, 30));
        }
        break;
      case 'previousYear':
        this.dateInput = event.name;
        this.isDropdownOpen = false;
        this.startDate = this.setStartOfDay(new Date(today.getFullYear() - 1, 0, 1));
        this.endDate = this.setEndOfDay(new Date(today.getFullYear() - 1, 11, 31));
        break;
      case 'nextWeek':
        this.dateInput = event.name;
        this.isDropdownOpen = false;
        this.startDate = new Date(today);
        this.startDate.setDate(today.getDate() - today.getDay() + 7);
        this.startDate = this.setStartOfDay(this.startDate);
        this.endDate = new Date(this.startDate);
        this.endDate.setDate(this.startDate.getDate() + 6);
        this.endDate = this.setEndOfDay(this.endDate);
        break;
      case 'nextMonth':
        this.dateInput = event.name;
        this.isDropdownOpen = false;
        this.startDate = this.setStartOfDay(new Date(today.getFullYear(), today.getMonth() + 1, 1));
        this.endDate = this.setEndOfDay(new Date(today.getFullYear(), today.getMonth() + 2, 0));
        break;
      case 'nextQuarter':
        this.dateInput = event.name;
        this.isDropdownOpen = false;
        let nextQuarterStartMonth;
        if (today.getMonth() < 3) {
          nextQuarterStartMonth = 3;
          this.startDate = this.setStartOfDay(new Date(today.getFullYear(), nextQuarterStartMonth, 1));
          this.endDate = this.setEndOfDay(new Date(today.getFullYear(), nextQuarterStartMonth + 2, 30));
        } else if (today.getMonth() >= 3 && today.getMonth() < 6) {
          nextQuarterStartMonth = 6;
          this.startDate = this.setStartOfDay(new Date(today.getFullYear(), nextQuarterStartMonth, 1));
          this.endDate = this.setEndOfDay(new Date(today.getFullYear(), nextQuarterStartMonth + 2, 30));
        } else if (today.getMonth() >= 6 && today.getMonth() < 9) {
          nextQuarterStartMonth = 9;
          this.startDate = this.setStartOfDay(new Date(today.getFullYear(), nextQuarterStartMonth, 1));
          this.endDate = this.setEndOfDay(new Date(today.getFullYear(), nextQuarterStartMonth + 2, 31));
        } else {
          nextQuarterStartMonth = 0;
          this.startDate = this.setStartOfDay(new Date(today.getFullYear() + 1, nextQuarterStartMonth, 1));
          this.endDate = this.setEndOfDay(new Date(today.getFullYear() + 1, nextQuarterStartMonth + 2, 31));
        }
        break;
      case 'nextYear':
        this.dateInput = event.name;
        this.isDropdownOpen = false;
        this.startDate = this.setStartOfDay(new Date(today.getFullYear() + 1, 0, 1));
        this.endDate = this.setEndOfDay(new Date(today.getFullYear() + 1, 11, 31));
        break;
      case 'custom':
        this.dateInput = "";
        this.showSingleDatePicker = true;
        break;
      case 'customRange':
        this.dateInput = "";
        this.showDatePickerRange = true;
        break;
      default:
        this.startDate = null;
        this.endDate = null;
    }
  }

  onDateChange(event: any): void {
    this.startDate = this.setStartOfDay(new Date(event));
    this.endDate = this.setEndOfDay(new Date(event));

    if (!!this.startDate) {
      // this.dateInput = this.datePipe.transform(this.startDate, 'mediumDate').toString();
    }
  }

  onDateRangeChange(event: any): void {
    this.startDate = this.setStartOfDay(new Date(event[0]));
    this.endDate = this.setEndOfDay(new Date(event[1]));

    if (!!this.startDate) {
      // this.dateInput = this.datePipe.transform(this.startDate, 'mediumDate').toString();
    }
    this.dateInput += ' - '
    if (!!this.endDate) {
      // this.dateInput += this.datePipe.transform(this.endDate, 'mediumDate').toString();
    }
  }

  selectAction(type: any) {
    if (type == 'setDate') {
      this.isDropdownOpen = false;
    } else if (type == 'cancel') {
      this.resetData();
      this.isDropdownOpen = false;
    }
  }
}
