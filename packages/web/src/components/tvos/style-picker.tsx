/* eslint-disable lingui/no-unlocalized-strings -- the tvOS style's words go through tr() (./i18n), which this rule doesn't know */
import { Select } from '@aiostreams/ui/select';
import { settings, useSetting, type InterfaceStyle } from '../../lib/settings';
import { tr } from './i18n';

/** The theme settings' choice of look, kept here so the app's settings page only places it. */
export function InterfaceStylePicker() {
  const [style, setStyle] = useSetting(settings.theme.interfaceStyle);
  return (
    <Select
      label={tr('Interface')}
      help={tr("Apple TV's look, or the app's own pages. Kept on this device.")}
      options={[
        { value: 'tvos', label: 'tvOS' },
        { value: 'aiostreams', label: 'AIOStreams' },
      ]}
      value={style}
      onValueChange={(value) => setStyle(value as InterfaceStyle)}
    />
  );
}
