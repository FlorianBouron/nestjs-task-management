import { PipeTransform, BadRequestException } from '@nestjs/common';
import { TaskStatus } from '../task.model';

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatus = [
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE,
  ];

  transform(value: any) {
    const upperCaseValue = value.toUpperCase();

    if (!this.isStatusValid(upperCaseValue)) {
      throw new BadRequestException(`${upperCaseValue} is an invalid status`);
    }

    return upperCaseValue;
  }

  private isStatusValid(status: any): boolean {
    const index = this.allowedStatus.indexOf(status);
    return index !== -1;
  }
}
