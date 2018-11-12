import { TestBed } from '@angular/core/testing';
import { ProgressBarService } from './service';
import { TestsModule } from '../../modules/tests/tests';
import { APP_CONFIG, Config } from '../../../common/utils/Config';

describe('ProgressBarService', () => {
    let progressBarService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [TestsModule],
            providers: [
                { provide: APP_CONFIG, useValue: Config },
                ProgressBarService
            ]
        });

        progressBarService = TestBed.get(ProgressBarService);
    });

    it('should not be requestsRunning', () => {
        const instance = new ProgressBarService();
        expect(instance).toBeTruthy();
    });

    it('should not be requestsRunning', () => {
        expect(progressBarService.requestsRunning).toBe(0);
    });

    it('should increase and decrease the counter of requests running', () => {
        progressBarService.increase();
        progressBarService.increase();
        expect(progressBarService.requestsRunning).toBe(2);
        progressBarService.decrease();
        expect(progressBarService.requestsRunning).toBe(1);
        progressBarService.decrease();
        expect(progressBarService.requestsRunning).toBe(0);
        progressBarService.decrease();
        expect(progressBarService.requestsRunning).toBe(0);
    });
});
