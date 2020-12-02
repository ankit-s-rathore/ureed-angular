import * as fromDashboard from './dashboard.actions';

describe('Dashboard Actions', () => {
  it('should have open post project modal', () => {
    expect(fromDashboard.openPostProjectModal().type).toBe(
      '[Dashboard Page] Open Post Project Modal'
    );
  });

  it('should have close post project modal', () => {
    expect(fromDashboard.closePostProjectModal().type).toBe(
      '[Dashboard Page] Close Post Project Modal'
    );
  });
});
