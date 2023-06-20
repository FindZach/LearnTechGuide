import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toast-message',
  templateUrl: './toast-message.component.html',
  styleUrls: ['./toast-message.component.scss']
})
export class ToastMessageComponent {
  @Input() type?: string;
  @Input() message?: string;

  getToastColor(type: string): string {
    switch (type) {
      case 'success':
        return 'bg-green-500';
      case 'info':
        return 'bg-blue-500';
      case 'warning':
        return 'bg-yellow-400';
      case 'error':
        return 'bg-red-500';
      default:
        return '';
    }
  }


  getToastTextColor(type: string): string {
    switch (type) {
      case 'success':
        return 'text-green-500';
      case 'info':
        return 'text-blue-500';
      case 'warning':
        return 'text-yellow-400';
      case 'error':
        return 'text-red-500';
      default:
        return '';
    }
  }
}
