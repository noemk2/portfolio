import { renderComponent, expect, sinon } from '../../../../../utility';
import EditBox from '../../../../../../../../src/cms/components/posts/forms/Item/Form/EditBox/index';

describe('EditBox', () => {

  let component;

  beforeEach(() => {
    component = renderComponent(EditBox, null, {});
  });

  it('shows 7 edit box items', () => {
    expect(component.find('li').length).to.equal(7);
  });

});